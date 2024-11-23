import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'location-voiture-marrakech', component: HomeComponent },
  
    {path: 'voitures' , component: CarsListComponent},
    {path: 'apropos-de-nous' , component: AboutUsComponent},
    {path: 'services' , component: ServicesComponent},
    {path: 'blogs' , component: BlogsComponent},
    { path: 'blog-detail/:id/:titre', component: BlogDetailComponent },
    { path: 'contactez-nous', component: ContactUsComponent },
  // Wildcard route for handling undefined routes
  { path: '**', component: NotFoundComponent },
  /*     {path: 'reservation/:title/:model/:fuel/:year/:transmission/:price/:category' , component: ReservationComponent}
  */
  {path: 'reservation' , component: ReservationComponent}
  
  
  ];
