import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UltimateComponent } from './ultimate/ultimate.component';
import { MailComponent } from './mail/mail.component';
import { LoadingComponent } from './loading/loading.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    UltimateComponent,
    MailComponent,
    LoadingComponent,
    PreferencesComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
