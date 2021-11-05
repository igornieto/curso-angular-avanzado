import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../models/movie.model";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: 'movies-detail-page',
  template: `
    <h1>Soy la página de detalle</h1>
  `
})
export class MoviesDetailPageComponent {
  movieId?: number;
  movie?: Movie

  constructor(
    route: ActivatedRoute, 
    moviesService: MoviesService
  ) {
    route.params.subscribe(params => {
      const id = parseInt(params['id'])
      if(id) {
        this.movieId = id;
        moviesService.getMovie(id)
          .then(movie => {
            this.movie = movie.result;
          })
      }
    })
  }

}