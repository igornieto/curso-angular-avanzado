import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MoviesDetailPageComponent } from "./containers/movies-detail.component";
import { MoviesPageComponent } from "./containers/movies-page.component";
import { MoviesRoutingModule } from "./movies-routing.module";

@NgModule({
  declarations: [
    MoviesPageComponent,
    MoviesDetailPageComponent
  ],
  imports: [
    SharedModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule {}