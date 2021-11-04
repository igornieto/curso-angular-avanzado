import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <menu></menu>
    <!-- <example></example> -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
}
