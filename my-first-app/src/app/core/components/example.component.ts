
import { Component } from "@angular/core";

@Component({
  selector: 'example',
  template: `
    <div *ngIf="!loading; else loadingTemplate">
      <p>Hola mundo</p>
    </div>

    <ng-template #loadingTemplate>
      Loading...
    </ng-template>
  `
})
export class ExampleComponent {
  loading = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 3000)
  }
}

