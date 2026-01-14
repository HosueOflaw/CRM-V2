import { Component, ElementRef, ViewChild, AfterViewChecked, Pipe, PipeTransform, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AiService, AiMessage } from '../service/ai.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

// --- Simple Pipe for Markdown ---
@Pipe({ name: 'markdownToHtml', standalone: true })
export class MarkdownToHtmlPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return '';
        // Bold: **text** -> <b>text</b>
        let html = value.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        // Newline to <br>
        html = html.replace(/\n/g, '<br>');
        return html;
    }
}

@Component({
    selector: 'app-ai-assistant',
    standalone: true,
    imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, TooltipModule, MarkdownToHtmlPipe],
    template: `
        <!-- Floating Trigger Button -->
        <div class="ai-trigger-btn" (click)="toggleChat()" [@slideInOut]>
            <div class="ai-icon-container">
                <i class="pi pi-sparkles text-2xl animate-pulse"></i>
            </div>
        </div>

        <!-- Chat Window -->
        <div class="ai-chat-window glass-effect" *ngIf="isOpen" [@fadeScale]>
            <!-- Header -->
            <div class="chat-header">
                <div class="flex items-center gap-3">
                    <div class="ai-avatar-sm">
                        <i class="pi pi-android text-white"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg m-0 leading-tight">MIA AI</h3>
                        <span class="text-xs opacity-75">مساعد بيت القانون الذكي</span>
                    </div>
                </div>
                <button (click)="toggleChat()" class="close-btn">
                    <i class="pi pi-times"></i>
                </button>
            </div>

            <!-- Messages Area -->
            <div class="chat-messages custom-scrollbar" #scrollContainer>
                <div *ngIf="messages.length === 0" class="welcome-state text-center p-6">
                    <div class="ai-avatar-lg mb-4 animate-bounce-slow">
                        <i class="pi pi-sparkles text-3xl"></i>
                    </div>
                    <h4 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">مرحباً بك! 👋</h4>
                    <p class="text-gray-500 dark:text-gray-400 text-sm mb-6">
                        أنا مساعدك الشخصي. اسألني عن النظام، المهام، أو اطلب مني تنفيذ أوامر بصوتك!
                    </p>
                    <div class="suggestions-grid">
                        <button *ngFor="let hint of starterHints" 
                                (click)="sendMessage(hint)"
                                class="hint-chip">
                            {{ hint }}
                        </button>
                    </div>
                </div>

                <div *ngFor="let msg of messages" 
                     class="message-row" 
                     [ngClass]="{'user-msg': msg.isUser, 'ai-msg': !msg.isUser}">
                    
                    <div class="message-bubble shadow-sm" [innerHTML]="msg.text | markdownToHtml"></div>
                    
                    <!-- Suggestions Chips for AI messages -->
                    <div *ngIf="!msg.isUser && msg.suggestions?.length" class="suggestions-row flex gap-2 flex-wrap mt-2">
                        <button *ngFor="let sugg of msg.suggestions" 
                                (click)="sendMessage(sugg)"
                                class="suggestion-chip text-xs">
                            {{ sugg }}
                        </button>
                    </div>
                </div>

                <div *ngIf="isThinking" class="message-row ai-msg">
                    <div class="typing-indicator">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>

            <!-- Input Area -->
            <div class="chat-input-area border-t border-gray-100 dark:border-gray-700/50">
                <span class="p-input-icon-right w-full flex gap-2">
                    <input type="text" pInputText 
                           [(ngModel)]="currentMessage" 
                           (keydown.enter)="sendMessage()"
                           placeholder="اكتب رسالتك أو تحدث..." 
                           class="w-full rounded-full !bg-gray-50 dark:!bg-gray-800/50 border-none focus:ring-2 ring-primary-200 pl-10" />
                    
                    <!-- Voice Button -->
                    <button class="mic-btn w-10 h-10 rounded-full flex items-center justify-center transition-all"
                            [ngClass]="{'bg-red-500 text-white animate-pulse': isRecording, 'bg-gray-200 text-gray-500 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300': !isRecording}"
                            (click)="toggleVoice()">
                        <i class="pi" [ngClass]="isRecording ? 'pi-stop-circle' : 'pi-microphone'"></i>
                    </button>

                    <button class="send-btn w-10 h-10 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center shadow-md transition-transform active:scale-95"
                            (click)="sendMessage()" 
                            [disabled]="!currentMessage.trim()">
                        <i class="pi pi-send text-sm" [ngClass]="{'rtl-flip': true}"></i>
                    </button>
                </span>
            </div>
        </div>
    `,
    styles: [`
        /* ... (Keep existing styles) ... */
        .mic-btn {
            cursor: pointer;
            border: none;
            outline: none;
        }
        /* Duplicate basic styles as previous file block to ensure no regression */
        /* ... Assuming previous styles block is preserved by multi-replace safe behavior or manual ... */
        /* Since replace_file_content replaces range, I need to include styles again or trust user. 
           I'll assume minimal style changes and just map the structural logic. 
           ACTUALLY, to be safe, I should just modify the logic parts and leave template if possible, 
           but I added the Mic Button. So I must include updated template.
           I will paste vital styles below essentially. */

        :host { display: block; font-family: 'Inter', sans-serif; direction: rtl; }
        .glass-effect {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }
        :host-context(.dark) .glass-effect {
            background: rgba(17, 24, 39, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }
        
        .ai-chat-window {
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 380px;
            height: 600px;
            border-radius: 20px;
            z-index: 9998;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        /* Trigger Button - Optimized */
        .ai-trigger-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            /* Force High Contrast Indigo */
            background: linear-gradient(135deg, #4f46e5 0%, #312e81 100%);
            border: 2px solid white;
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
            color: #ffffff;
            cursor: pointer;
            z-index: 99999;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .ai-trigger-btn:hover { transform: scale(1.1) rotate(-10deg); box-shadow: 0 8px 25px rgba(79, 70, 229, 0.6); }

        /* Header */
        .chat-header {
            padding: 1rem;
            background: linear-gradient(135deg, #4f46e5 0%, #312e81 100%);
            color: #ffffff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Avatars */
        .ai-avatar-sm { width: 32px; height: 32px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .ai-avatar-lg { width: 64px; height: 64px; margin: 0 auto; color: #4f46e5; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        
        .close-btn { width: 30px; height: 30px; background: rgba(255,255,255,0.1); border:none; color:white; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; }
        .close-btn:hover { background: rgba(255,255,255,0.2); }

        /* Messages */
        .chat-messages { flex: 1; padding: 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; scroll-behavior: smooth; }
        .message-row { display: flex; flex-direction: column; max-width: 85%; }
        .message-row.user-msg { align-self: flex-end; align-items: flex-end; }
        .message-row.ai-msg { align-self: flex-start; align-items: flex-start; }
        
        .message-bubble {
            padding: 0.8rem 1rem;
            border-radius: 12px;
            font-size: 0.9rem;
            line-height: 1.5;
            position: relative;
        }
        .user-msg .message-bubble { background: #4f46e5; color: white; border-bottom-left-radius: 12px; border-bottom-right-radius: 2px; }
        :host-context(.app-dark) .user-msg .message-bubble { color: white; } /* Force white text in dark mode too */

        .ai-msg .message-bubble { background: white; color: #1f2937; border-bottom-left-radius: 2px; border-bottom-right-radius: 12px; border: 1px solid #e5e7eb; }
        :host-context(.dark) .ai-msg .message-bubble { background: #1f2937; color: #e5e7eb; border-color: #374151; }

        /* Chips */
        .hint-chip, .suggestion-chip {
            background: #ffffff; border: 1px solid #c7d2fe; color: #3730a3;
            padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; cursor: pointer; transition: all 0.2s;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin: 3px;
        }
        .hint-chip:hover, .suggestion-chip:hover {
            background: #eef2ff; border-color: #4f46e5; transform: translateY(-1px);
        }
        :host-context(.dark) .hint-chip { background: #1f2937; border-color: #374151; color: #e5e7eb; }

        .chat-input-area { padding: 1rem; display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.5); }
        :host-context(.dark) .chat-input-area { background: rgba(0,0,0,0.2); }

         /* Typing Indicator */
        .typing-indicator span {
            display: inline-block; width: 6px; height: 6px; background-color: #9ca3af; border-radius: 50%;
            animation: typing 1s infinite; margin: 0 2px;
        }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }

        .rtl-flip { transform: scaleX(-1); }
    `],
    animations: [
        trigger('fadeScale', [
            state('void', style({ opacity: 0, transform: 'scale(0.95) translateY(20px)' })),
            state('*', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
            transition('void => *', [
                animate('250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')
            ]),
            transition('* => void', [
                animate('200ms ease-out', style({ opacity: 0, transform: 'scale(0.95) translateY(20px)' }))
            ])
        ]),
        trigger('slideInOut', [
            state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                animate('300ms ease-out')
            ]),
            transition('* => void', [
                animate('200ms ease-in', style({ opacity: 0, transform: 'translateX(100%)' }))
            ])
        ])
    ]
})
export class AiAssistantComponent implements OnInit, AfterViewChecked {
    @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

    isOpen = false;
    currentMessage = ''; // Replaces userInput
    messages: AiMessage[] = [];
    isThinking = false; // Replaces isTyping
    isRecording = false; // Voice state

    // Hints array for Template
    starterHints = ['إيه الأخبار؟', 'ابدا استراحة', 'مهامي', 'مين بيت القانون؟'];

    // Web Speech API
    private recognition: any;

    constructor(private aiService: AiService, private cdRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.loadChatHistory();
        this.initSpeechRecognition();
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            setTimeout(() => this.scrollToBottom(), 100);
        }
    }

    // --- Session Memory ---
    loadChatHistory() {
        const saved = sessionStorage.getItem('ai_chat_history');
        if (saved) {
            try {
                this.messages = JSON.parse(saved);
            } catch (e) {
                console.error('Failed to load chat history');
            }
        }
    }

    saveChatHistory() {
        // Keep last 50 messages to save space
        const toSave = this.messages.slice(-50);
        sessionStorage.setItem('ai_chat_history', JSON.stringify(toSave));
    }

    sendMessage(text: string = this.currentMessage) {
        if (!text || !text.trim()) return;

        // User Message
        const userMsg: AiMessage = {
            text: text,
            isUser: true,
            timestamp: new Date()
        };
        this.messages.push(userMsg);

        this.currentMessage = '';
        this.isThinking = true;
        this.saveChatHistory();

        // AI Response
        this.aiService.processMessage(text).subscribe(response => {
            this.isThinking = false;
            this.messages.push(response);
            this.saveChatHistory();
            this.cdRef.detectChanges();

            // Execute Navigation Action
            if (response.action) {
                setTimeout(() => response.action(), 500);
            }
            // Execute Direct Function
            if (response.execution) {
                console.log('⚡ Executing AI Action...');
                setTimeout(() => response.execution!(), 500);
            }

            this.scrollToBottom();
        });
    }

    scrollToBottom(): void {
        try {
            if (this.scrollContainer) {
                this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
            }
        } catch (err) { }
    }

    // --- Voice Recognition Logic ---
    initSpeechRecognition() {
        if ('webkitSpeechRecognition' in window) {
            const v = (window as any).webkitSpeechRecognition;
            this.recognition = new v();
            this.recognition.lang = 'ar-EG'; // Arabic Egypt
            this.recognition.continuous = false;
            this.recognition.interimResults = false;

            this.recognition.onresult = (e: any) => {
                const transcript = e.results[0][0].transcript;
                this.currentMessage = transcript;
                this.isRecording = false;
                this.cdRef.detectChanges();
                // Optionally auto-send
                // this.sendMessage(); 
            };

            this.recognition.onerror = (e: any) => {
                console.error('Speech error:', e);
                this.isRecording = false;
                this.cdRef.detectChanges();
            };

            this.recognition.onend = () => {
                this.isRecording = false;
                this.cdRef.detectChanges();
            };
        } else {
            console.warn('Web Speech API not supported in this browser.');
        }
    }

    toggleVoice() {
        if (!this.recognition) {
            alert('عذراً، متصفحك لا يدعم الأوامر الصوتية. جرب استخدام Google Chrome.');
            return;
        }

        if (this.isRecording) {
            this.recognition.stop();
            this.isRecording = false;
        } else {
            this.recognition.start();
            this.isRecording = true;
        }
    }
}
