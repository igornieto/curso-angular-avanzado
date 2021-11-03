import { Component } from "@angular/core";
import { Movie, MoviesList } from "../models/movie.model";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: 'movies-page',
  template: `
    <div class="wrapper">
      <header>
        <h1>Últimas películas</h1>
      </header>
      <div class="list-movies">
        <movie *ngFor="let movie of movies?.results" [movie]="movie"></movie>
      </div>
    </div>
  `,
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent {

  movies?: MoviesList;

  constructor(moviesService: MoviesService) {
    moviesService.getMovies().then((res: any) => {
      this.movies = res;
    });
  }
}