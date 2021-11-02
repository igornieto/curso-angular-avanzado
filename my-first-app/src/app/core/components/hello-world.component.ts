import { Component } from "@angular/core";
import { WeatherService } from "../services/weather.service";
import { WeatherInfo } from "../models/weather.model";

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello world</h2>
    <p>{{text}}</p>
    <button mat-raised-button color="primary" (click)="changeDisabled()">Change disabled</button>
    <hr>
    <div [highlight]="'green'">
      <ng-container *ngIf="currentWeather; else loading">
        <h1>The weather in {{currentWeather.name}}</h1>
        <p>Status: {{currentWeather.weather[0].main}}</p>
        <p>Description: {{currentWeather.weather[0].description}}</p>
      </ng-container>
      <ng-template #loading>
        Loading...
      </ng-template>
    </div>
    <hr>

    <p *ngIf="visible" [ngStyle]="manageStyle()">Test con NgClass</p>
    <p *ngIf="visible" [ngClass]="manageClasses()">Test con NgClass</p>
    <button (click)="grow = !grow" mat-flat-button color="primary">Cambiar tamaño</button>
    <button (click)="highlight = !highlight" mat-flat-button color="primary">Cambiar resaltado</button>
    <button (click)="visible = !visible" mat-flat-button color="primary">Change visibility</button>

    <hr>

    <article *ngFor="let product of products; let i = index">
      <header>
        <h3>{{i}}. {{product}}</h3>
      </header>
    </article>

    <hr>

    <div [ngSwitch]="selectedBike">
      <article *ngSwitchCase="0">
        <header>
          <h3>Bike 1</h3>
        </header>
      </article>
      <article *ngSwitchCase="1">
        <header highlight>
          <h3>Bike 2</h3>
        </header>
      </article>
    </div>

    <hr>

    <p>
      Linea 1<br>
      <ng-container *ngIf="visible">Linea 2<br></ng-container>
      Linea 3<br>
    </p>

    <hr>

    <p [highlight]="'green'" [defaultColor]="'orange'">Hello world resaltado</p>

    <hr>
  `,
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {
  text = 'Este es un texto dinámico';
  disabled = false;
  currentWeather?: WeatherInfo;

  grow: boolean = false;
  highlight: boolean = false;
  visible: boolean = true;

  products: string[] = [
    'Producto 1',
    'Producto 2',
    'Producto 3'
  ]

  selectedBike = 1;

  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeatherByCity('Madrid').then(w => {
      this.currentWeather = w as WeatherInfo;
    })
  }

  foo(value: {name: string; age: number}) {
    console.log(value);
  }

  manageStyle() {
    return {
      backgroundColor: this.highlight ? 'yellow' : '',
      fontSize: this.grow ? '100px': ''
    }
  }

  manageClasses(): Record<string, boolean> {
    return {
      grow: this.grow,
      highlight: this.highlight
    }
  }

  changeDisabled() {
    this.disabled = !this.disabled;
  }
}