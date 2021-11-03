import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MovieComponent } from "./components/movie.component";
import { MoviesDetailPageComponent } from "./containers/movies-detail.component";
import { MoviesPageComponent } from "./containers/movies-page.component";
import { MoviesRoutingModule } from "./movies-routing.module";

@NgModule({
  declarations: [
    MoviesPageComponent,
    MoviesDetailPageComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule {}