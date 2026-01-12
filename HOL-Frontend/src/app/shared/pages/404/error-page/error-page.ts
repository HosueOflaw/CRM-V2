import { AfterViewInit, Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { gsap } from 'gsap';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './error-page.html',
  styleUrl: './error-page.css'
})
export class ErrorPage implements AfterViewInit {

  constructor(private location: Location) { }

  ngAfterViewInit(): void {
    // Subtle float animation for the error code
    gsap.to('.error-code-container h1', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Fade in content
    gsap.from('.glass-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "out"
    });
  }

  goBack() {
    this.location.back();
  }
}
