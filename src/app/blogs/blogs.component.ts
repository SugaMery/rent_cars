import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { Blog, BlogService } from '../blog.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
declare var $: any;
declare var Swiper: any;
declare var WOW: any;
@Component({
  selector: 'app-blogs',
  standalone: true,
  providers:[Meta,Title],
  imports: [HeaderComponent, FooterComponent, PreloaderComponent,CommonModule, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: Blog[] = [];
  formatTitle(title: string): string {
    return title
      .toLowerCase() // Convert to lowercase
      .normalize('NFD') // Normalize the string
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, ''); // Remove any non-word characters (except hyphens)
  }
  constructor(
    private meta: Meta,
    private title: Title,
    private blogService: BlogService,
    @Inject(PLATFORM_ID) private platformId: Object

  ) {
    // Set page meta tags and title for SEO
    //this.setMetaTags();
    this.setTitle('Qui nous sommetts - Onemakan - Annonces au Maroc');
  }

  // Public method to set the page title
  public setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }

  // Public method to set all meta tags
  public setMetaTags(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        "Découvrez des annonces gratuites au Maroc, y compris la vente et location d'immobilier, véhicules et biens personnels.",
    });
    this.meta.updateTag({ name: 'author', content: 'Onemakan' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Annonces, Maroc, Immobilier, Véhicules, Biens personnels, Location, Vente',
    });
    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
    this.meta.updateTag({ httpEquiv: 'x-ua-compatible', content: 'ie=edge' });
    this.meta.updateTag({
      property: 'og:description',
      content:
        "Découvrez des annonces gratuites au Maroc, y compris la vente et location d'immobilier, véhicules et biens personnels.",
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Onemakan - Annonces au Maroc',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://onemakan.ma/qui-sommes-nous',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'assets/imgs/people/person.png',
    });
  }

  ngOnInit(): void {
    this.setTitle('Qui nous sommetts - Onemakan - Annonces au Maroc');

    this.loadBlogs();  // Call the loadBlogs method to fetch blog data
    this.loadScripts();  // Load all required scripts
   //this.setMetaTags();
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


  // Method to load blogs using BlogService
  displayedBlogs: Blog[] = [];
  currentPage: number = 1;
  pageSize: number = 5; // Number of blogs per page
  totalBlogs: number = 0;

  loadBlogs(): void {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {
      this.blogs = data;
      this.totalBlogs = data.length;
      this.updateDisplayedBlogs();
    });
  }

  updateDisplayedBlogs(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedBlogs = this.blogs.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages()) {
      this.currentPage = page;
      this.updateDisplayedBlogs();
    }
  }

  totalPages(): number {
    return Math.ceil(this.totalBlogs / this.pageSize);
  }
}
