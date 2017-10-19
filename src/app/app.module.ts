import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { LoadingComponent } from './loading/loading.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

import { DataService } from "./data.service";
import { LeadsComponent } from './leads/leads.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductsSliderComponent } from './products-slider/products-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    LoadingComponent,
    PreferencesComponent,
    ThankYouComponent,
    LeadsComponent,
    HomeComponent,
    ErrorComponent,
    ConfirmComponent,
    CarouselComponent,
    SearchBarComponent,
    ProductsSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
