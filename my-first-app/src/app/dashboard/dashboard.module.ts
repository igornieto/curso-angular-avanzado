import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DashboardPageComponent } from "./containers/dashboard-page.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule {}