import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NegociosComponent } from './negocios/negocios.component';
import { MarketingComponent } from './marketing/marketing.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'negocios', component: NegociosComponent },
    { path: 'marketing', component: MarketingComponent},
    { path: '**', redirectTo: '' }
];