import { Component } from "@angular/core";
import { Movie } from "../models/movie.model";

@Component({
  selector: 'movie',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title>{{movie.title}}</mat-card-title>
        <mat-card-subtitle>{{movie.vote}}</mat-card-subtitle>
      </mat-card-header>
      <figure mat-card-image>
        <img [src]="movie.poster" alt="" />
        <span class="adult" *ngIf="movie.adult">+18</span>
      </figure>
      <mat-card-content>
        <p>{{movie.overview}}</p>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  movie: Movie = {
    title: 'Venom: Let There Be Carnage',
    overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    adult: true,
    vote: 6.9,
    poster: 'https://image.tmdb.org/t/p/w500/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg'
  }

}