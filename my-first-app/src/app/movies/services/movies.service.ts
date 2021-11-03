import { Injectable } from "@angular/core";
import { Movie, MoviesList } from "../models/movie.model";

const API_KEY = '91f024697109b9ee4aa0237feb466ea1';
const BASE_ENDPOINT = 'https://api.themoviedb.org/3/';
const IMAGE_BASEPATH =  'https://image.tmdb.org/t/p/w500';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getMovies(page = 1) {
    return fetch(`${BASE_ENDPOINT}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return null;
      })
      .then(res => {
        if(res) {
          const results = res.results.map((m: any) => {
            return {
              title: m.title,
              overview: m.overview,
              adult: m.adult,
              vote: m.vote_average,
              poster: IMAGE_BASEPATH + m.poster_path
            } as Movie
          })
          const list = {
            page: res.page,
            totalPages: res.total_pages,
            totalResults: res.total_results,
            results
          } as MoviesList
          return list;
        }
        console.log('Error obteniendo películas');
        return null;
      })
      .catch(err => {
        console.log('Error obteniendo películas', err);
      })
  }
}
