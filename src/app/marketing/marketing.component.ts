import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { CtaComponent } from "../components/cta/cta.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-marketing',
  imports: [HeaderComponent, CtaComponent, FooterComponent],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css'
})
export class MarketingComponent {

}
