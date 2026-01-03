import { AfterViewInit, Component } from '@angular/core';
import { gsap, Linear } from 'gsap';

@Component({
  selector: 'app-error-page',
  imports: [],
  templateUrl: './error-page.html',
  styleUrl: './error-page.css'
})
export class ErrorPage implements AfterViewInit{

  ngAfterViewInit(): void {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();

    t1.to('.cog1', {
      transformOrigin: '50% 50%',
      rotation: '+=360',
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8
    });

    t2.to('.cog2', {
      transformOrigin: '50% 50%',
      rotation: '-=360',
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8
    });

    t3.fromTo('.wrong-para',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: {
          repeat: -1,
          yoyo: true
        }
      }
    );
  }
}
