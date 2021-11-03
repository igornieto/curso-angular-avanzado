import { Component } from "@angular/core";
import { Movie } from "../models/movie.model";

@Component({
  selector: 'movies-page',
  template: `
    <div class="wrapper">
      <header>
        <h1>Últimas películas</h1>
      </header>
      <div class="list-movies">
        <movie *ngFor="let movie of movies" [movie]="movie"></movie>
      </div>
    </div>
  `
})
export class MoviesPageComponent {

  movies: Movie[] = [
    {
      title: 'Venom: Let There Be Carnage',
      overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      adult: true,
      vote: 6.9,
      poster: 'https://image.tmdb.org/t/p/w500/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg'
    },
    {
      title: 'Dune',
      overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      adult: true,
      vote: 8,
      poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg'
    }
  ]
}