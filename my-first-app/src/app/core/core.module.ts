import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app.component';
import { HelloWorldComponent } from './components/hello-world.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu.component';
import { WeatherService } from './services/weather.service';
import { HighLightDirective } from './directives/highlight.directive';
import { ExampleComponent } from './components/example.component';
import { ExponentialPipe } from '../shared/pipes/exponential.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './components/user-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MenuComponent,
    HighLightDirective,
    ExampleComponent,
    ExponentialPipe,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService],
})
export class CoreModule { }