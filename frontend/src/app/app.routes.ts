 


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { AcademicLegacyComponent } from './pages/academic-legacy/academic-legacy.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { PersonalPageComponent } from './pages/personal-page/personal-page.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { MemoryEventsComponent } from './pages/memory-events/memory-events.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biography', component: BiographyComponent },
  { path: 'academic-legacy', component: AcademicLegacyComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'personal-page', component: PersonalPageComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'memory-events', component: MemoryEventsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }