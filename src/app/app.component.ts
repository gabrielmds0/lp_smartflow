import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SocialComponent } from './components/social/social.component';
import { FooterComponent } from './components/footer/footer.component';
import { CtaComponent } from './components/cta/cta.component';
import { FeaturesComponent } from './components/features/features.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, SocialComponent, FooterComponent, CtaComponent, FeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lp_dataflow';
}
