import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <menu></menu>
    <!-- <example 
      value1="Este es el valor 1"
      [value2]="title"
      [value3]="7654759"
      [value4]="{
        name: 'Igor'
      }">  
    </example> -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
}
