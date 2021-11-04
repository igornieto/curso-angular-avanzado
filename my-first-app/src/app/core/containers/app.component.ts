import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <menu></menu>
    <!-- <example>
      <h1 heading>Proyección multislot</h1>
      <div actions><button>Action 1</button></div>
      This is the body
    </example> -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';

  foo(value: string) {
    console.log(value);
  }
}
