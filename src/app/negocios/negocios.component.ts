import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../components/footer/footer.component";
import { CtaComponent } from '../components/cta/cta.component';

@Component({
  selector: 'app-negocios',
  imports: [HeaderComponent, RouterModule, FooterComponent, CtaComponent],
  templateUrl: './negocios.component.html',
  styleUrl: './negocios.component.css'
})
export class NegociosComponent {

}
