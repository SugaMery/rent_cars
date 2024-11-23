import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { HeaderComponent } from "../header/header.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var $: any;
declare var Swiper: any;
declare var WOW: any;
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FooterComponent, PreloaderComponent, HeaderComponent, CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  sendMessage() {
    const { firstName, lastName, email, phone, message } = this.formData;

    // Construct WhatsApp message
    const whatsappMessage = `Bonjour, je suis ${firstName} ${lastName}. 
Email: ${email}
Téléphone: ${phone}
Message: ${message}`;

    // Encode message and create WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/212699050501?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };
  }
  loadScripts(): void {
    const scripts = [
      '/assets/js/jquery-3.7.1.min.js',
      '/assets/js/jquery-ui.js',
      '/assets/js/bootstrap.min.js',
      '/assets/js/validator.min.js',
      '/assets/js/jquery.slicknav.js',
      '/assets/js/swiper-bundle.min.js',
      '/assets/js/jquery.waypoints.min.js',
      '/assets/js/jquery.counterup.min.js',
      '/assets/js/jquery.magnific-popup.min.js',
      '/assets/js/SmoothScroll.js',
      '/assets/js/parallaxie.js',
      '/assets/js/gsap.min.js',
      '/assets/js/SplitText.js',
      '/assets/js/ScrollTrigger.min.js',
      '/assets/js/jquery.mb.YTPlayer.min.js',
      '/assets/js/wow.js',
      '/assets/js/function.js'
    ];

    this.loadScriptArray(scripts);
  }
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  loadScriptArray(scripts: string[]): void {
    if (isPlatformBrowser(this.platformId)) {
      let loadedScripts = 0;
      scripts.forEach((scriptSrc) => {
        const script = document.createElement('script');
        script.src = scriptSrc;
        script.onload = () => {
          loadedScripts++;
          if (loadedScripts === scripts.length) {
            this.initializePlugins();
          }
        };
        script.onerror = (error) => {
          console.error(`Error loading script: ${scriptSrc}`, error);
        };
        document.body.appendChild(script);
      });
    } else {
      console.warn('Scripts cannot be loaded on the server-side.');
    }
  }
  // Initialize plugins after all scripts are loaded
  initializePlugins(): void {
    // Initialize SlickNav
    if (typeof $.fn.slicknav === 'function') {
      $('#menu').slicknav();  // Initialize slicknav on a menu with id "menu"
      //console.log('SlickNav initialized');
    }

    // Initialize Swiper
    if (typeof Swiper === 'function') {
      new Swiper('.swiper-container', {
        autoplay: true,
        navigation: true,
        pagination: { clickable: true },
      });
      //console.log('Swiper initialized');
    }

    // Initialize WOW.js (for animations)
    if (typeof WOW === 'function') {
      new WOW().init();
      //console.log('WOW.js initialized');
    }

    // Other plugin initializations if needed
    // For example, Magic Cursor, Waypoints, etc.
  }

  ngOnInit(): void {
    this.loadScripts();  // Load all required scripts
  }
}
