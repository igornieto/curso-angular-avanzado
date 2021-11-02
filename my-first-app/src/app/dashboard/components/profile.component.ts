import { Component } from "@angular/core";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: 'profile',
  template: `
    <figure>
      <img src="" alt=""/>
    </figure>
    <div>
      <header>
        <h2>Igor</h2>
      </header>
      <div>
        <h3>Tus géneros favoritos</h3>
        <mat-chip-list>
          <mat-chip color="primary" selected>Thriller</mat-chip>
          <mat-chip>Acción</mat-chip>
          <mat-chip>Comedia</mat-chip>
        </mat-chip-list>
      </div>
    </div>
  `,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(profile: ProfileService) {
    profile.getProfile()
      .then(res => {
        console.log(res);
      })
  }
}