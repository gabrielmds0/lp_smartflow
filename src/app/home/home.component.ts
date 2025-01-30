
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { SocialComponent } from '../components/social/social.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CtaComponent } from '../components/cta/cta.component';
import { FeaturesComponent } from '../components/features/features.component';
import { isPlatformBrowser } from '@angular/common';
import {Inject, PLATFORM_ID } from '@angular/core'; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    HeroComponent,
    SocialComponent,
    FooterComponent,
    CtaComponent,
    FeaturesComponent, 
    
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
}