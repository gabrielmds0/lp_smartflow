// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { CtaComponent } from './components/cta/cta.component';

export const routes: Routes = [
  { path: '', component: CtaComponent },
  { path: '**', redirectTo: '' } // Redirect unknown paths to home
];