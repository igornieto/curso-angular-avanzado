import { Component } from "@angular/core";

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello world</h2>
    <p>{{text}}</p>
    
    <mat-form-field appearance="fill">
      <mat-label>First mat input</mat-label>
      <input matInput placeholder="First mat input" [disabled]="disabled">
    </mat-form-field>

    <button mat-raised-button color="primary" (click)="changeDisabled()">Change disabled</button>
  `,
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {
  text = 'Este es un texto dinámico';
  disabled = false;

  changeDisabled() {
    this.disabled = !this.disabled;
  }
}