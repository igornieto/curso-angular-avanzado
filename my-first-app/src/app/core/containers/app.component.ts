import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <menu></menu>
    <!-- <hello-world></hello-world> -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
}
