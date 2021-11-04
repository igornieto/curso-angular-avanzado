
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'example',
  template: `
    <ng-content select="[heading]"></ng-content>
    <div class="example-body">
      <ng-content></ng-content>
    </div>
    <div class="actions">
      <ng-content select="[actions]"></ng-content>
    </div>
  `
})
export class ExampleComponent {

}

