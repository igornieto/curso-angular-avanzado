import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app.component';
import { HelloWorldComponent } from './components/hello-world.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
})
export class CoreModule { }