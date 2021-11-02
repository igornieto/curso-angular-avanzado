
import { Component } from "@angular/core";

@Component({
  selector: 'example',
  template: `
    <p>My birthday is: {{date | date: 'longDate' | uppercase }}</p>

    <p>Price:  {{amount | currency: 'EUR' }}</p>

    <p>Exponential: {{amount | exp : 10}}</p>
  `
})
export class ExampleComponent {
  date = new Date(1989, 2, 6);
  amount = 10;
}

