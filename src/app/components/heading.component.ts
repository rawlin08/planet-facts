import { Component } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
  <h1>THE PLANETS</h1>
  <app-menu></app-menu>
  `,
  styles: [`
  h1 {
    font-family: 'Antonio', sans-serif;
    font-size: 28px;
    letter-spacing: -1.05px;
    font-weight: 400;
  }
  `]
})
export class HeadingComponent {

}
