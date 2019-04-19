import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from "src/app/current/current.component";
import { ForecastComponent } from "src/app/forecast/forecast.component";

const routes: Routes = [
  {path:'',component: CurrentComponent},
  {path:'forecast',component: ForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
