import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UltimateComponent } from "./ultimate/ultimate.component";

const routes: Routes = [
  {
    path: '',
    component: UltimateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
