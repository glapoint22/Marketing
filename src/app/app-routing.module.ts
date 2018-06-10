import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MailComponent } from "./mail/mail.component";
import { ThankYouComponent } from "./thank-you/thank-you.component";
import { PreferencesComponent } from "./preferences/preferences.component";
import { LeadsComponent } from "./leads/leads.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { SearchComponent } from "./search/search.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: ':leadPage',
    component: LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
