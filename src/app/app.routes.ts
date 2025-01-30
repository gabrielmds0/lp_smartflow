import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NegociosComponent } from './negocios/negocios.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'negocios', component: NegociosComponent },
    { path: '**', redirectTo: '' }
];