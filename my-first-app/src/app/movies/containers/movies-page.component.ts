import { Component } from "@angular/core";

@Component({
  selector: 'movies-page',
  template: `
    <div class="wrapper">
      <header>
        <h1>Últimas películas</h1>
      </header>
      <movie></movie>
    </div>
  `
})
export class MoviesPageComponent {

}