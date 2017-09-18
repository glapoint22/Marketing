import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UltimateComponent } from "./ultimate/ultimate.component";
import { MailComponent } from "./mail/mail.component";
import { ThankYouComponent } from "./thank-you/thank-you.component";
import { PreferencesComponent } from "./preferences/preferences.component";

const routes: Routes = [
  {
    path: '',
    component: UltimateComponent
  },
  {
    path: 'mail',
    component: MailComponent
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  },
  {
    path: 'preferences',
    component: PreferencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
