import { Component } from "@angular/core";

@Component({
  selector: 'menu',
  template: `
    <nav>
      <button routerLink="/" mat-raised-button color="primary">Dashboard</button>
      <button routerLink="/movies" mat-raised-button color="accent">Peliculas</button>
    </nav>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

}