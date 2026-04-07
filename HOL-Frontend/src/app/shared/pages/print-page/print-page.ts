import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MandateReport } from '../../../features/negotiations/pages/client-follow-up copy/components/mandate-report/mandate-report';
import { FaxToWorkReport } from '../../../features/negotiations/pages/client-follow-up copy/components/fax-to-work-report/fax-to-work-report';

@Component({
    selector: 'app-print-page',
    standalone: true,
    imports: [CommonModule, MandateReport, FaxToWorkReport],
    template: `
    <div class="print-container">
      <!-- Mandate Report -->
      @if (type === 'mandate') {
        <app-mandate-report 
          [clientData]="clientData" 
          [isPreview]="false">
        </app-mandate-report>
      }

      <!-- Fax to Work Report -->
      @if (type === 'fax') {
        <app-fax-to-work-report 
          [clientData]="clientData" 
          [isPreview]="false">
        </app-fax-to-work-report>
      }
      
      <!-- Controls (Hidden during actual print) -->
      <div class="no-print print-controls" style="position: fixed; top: 20px; right: 20px; z-index: 10000; display: flex; gap: 10px;">
        <button (click)="printDocument()" class="print-btn">
          <i class="fas fa-print"></i> طباعة الآن
        </button>
        <button (click)="closeWindow()" class="close-btn-simple">
          إغلاق النافذة
        </button>
      </div>
    </div>
  `,
    styles: [`
    @media print {
      .no-print { display: none !important; }
      body { background: white !important; }
    }
    .print-container { 
      background: #f8fafc; 
      min-height: 100vh; 
      display: flex; 
      justify-content: center; 
      padding: 20px 0;
    }
    .print-btn {
      background: #2563eb;
      color: white;
      padding: 10px 20px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      font-weight: bold;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .print-btn:hover { background: #1d4ed8; }
    .close-btn-simple {
      background: white;
      color: #64748b;
      padding: 10px 20px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
      cursor: pointer;
    }
  `]
})
export class PrintPage implements OnInit {
    type: string | null = null;
    clientData: any = {};

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // Read report type from path /print/:type
        this.route.params.subscribe(params => {
            this.type = params['type'];
        });

        // Read report data from query parameters
        this.route.queryParams.subscribe(queryParams => {
            this.clientData = {
                clientName: queryParams['name'] || '',
                agentName: queryParams['agent'] || '',
                contractNumber: queryParams['contract'] || '',
                claimValue: queryParams['amount'] ? parseFloat(queryParams['amount']) : 0,
                caseNumber: queryParams['cid'] || '',
                address: queryParams['address'] || '',
                nationality: queryParams['nationality'] || '',
                employer: queryParams['employer'] || ''
            };

            // Auto-trigger print after a short delay for image loading
            setTimeout(() => {
                // Only auto-print if it's a real report (has at least a name or cid)
                if (this.clientData.clientName || this.clientData.caseNumber) {
                    // this.printDocument(); // Uncomment if you want automatic popup
                }
            }, 1500);
        });
    }

    printDocument() {
        window.print();
    }

    closeWindow() {
        window.close();
    }
}
