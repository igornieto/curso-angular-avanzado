
import { Component, Input } from "@angular/core";

@Component({
  selector: 'example',
  template: `
    <p>Value 1: {{value1}}</p>
    <p>Value 2: {{value2}}</p>
    <p>Value 3: {{value3}}</p>
    <p *ngIf="value4">Value 4: {{value4.name}} {{value4.age}}</p>
    <p>Value 4: {{value4?.name}} {{value4?.age}}</p>

  `
})
export class ExampleComponent {
  @Input() value1: string = 'Soy un input';
  @Input() value2?: string;
  @Input() value3?: number;
  @Input() value4?: { name: string; age?: number;};
}

