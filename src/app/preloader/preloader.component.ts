import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const preloader = document.querySelector('.preloader') as HTMLElement;

      const hidePreloader = () => {
        if (preloader) {
          preloader.style.transition = 'opacity 0.6s ease-out'; // Apply transition
          preloader.style.opacity = '0'; // Fade out the preloader
          setTimeout(() => {
            preloader.style.display = 'none'; // Fully hide
          }, 600); // Match transition duration
        }
      };

      // Primary attempt with window.onload
      window.onload = hidePreloader;

      // Fallback for iOS or failure
      setTimeout(() => {
        if (preloader && preloader.style.opacity !== '0') {
          console.warn('Fallback triggered: Preloader not hidden by window.onload');
          hidePreloader();
        }
      }, 2000); // Maximum wait time (2 seconds)
    } else {
      console.warn('Preloader logic skipped on the server-side.');
    }
  }
}
