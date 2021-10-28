import { NgModule } from "@angular/core";
import { DashboardPageComponent } from "./containers/dashboard-page.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    DashboardRoutingModule
  ]
})
export class DashboardModule {}