import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface UserForm {
  name: string;
  age: string;
  skills: '' | 'Angular' | 'React' | 'Vue';
  message: string;
}

@Component({
  selector: 'user-form',
  template: `
    <form [formGroup]="userForm" (ngSubmit)="handleSubmit()">
      <div>
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput type="text" formControlName="name">
          <mat-error>El campo es requerido</mat-error>
        </mat-form-field>
      </div>
      <div>
        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput required type="email" formControlName="email">
          <mat-error></mat-error>
        </mat-form-field>
      </div>
      <div>
        <mat-form-field appearance="fill">
          <mat-label>Age</mat-label>
          <input matInput type="number" formControlName="age">
        </mat-form-field>
      </div>
      <div>
        <mat-form-field appearance="fill">
          <mat-label>Skills</mat-label>
          <mat-select formControlName="skills">
            <mat-option value="Angular">Angular</mat-option>
            <mat-option value="React">React</mat-option>
            <mat-option value="Vue">Vue</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div>
        <mat-form-field appearance="fill">
          <mat-label>Message</mat-label>
          <textarea cdkTextareaAutosize matInput formControlName="message"></textarea>
        </mat-form-field>
      </div>
      <button [disabled]="!userForm.valid" type="submit" mat-raised-button color="primary">Enviar</button>
    </form>
  `
})
export class UserFormComponent {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(''),
    skills: new FormControl(''), 
    message: new FormControl(''), 
  })

  handleSubmit() {
    console.log(this.userForm.value);
  }
}