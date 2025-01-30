import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, RouterModule],
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = 'lp_dataflow';
 

}
