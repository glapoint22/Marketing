// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { LoadingComponent } from './loading/loading.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { LeadsComponent } from './leads/leads.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductsSliderComponent } from './products-slider/products-slider.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ArrowsComponent } from './arrows/arrows.component';
import { ProductComponent } from './product/product.component';
import { VideoPlayButtonComponent } from './video-play-button/video-play-button.component';
import { PaginatorComponent } from './paginator/paginator.component';

// Services
import { DataService } from "./data.service";
import { VideoService } from "./video.service";

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
    ProductsSliderComponent,
    VideoPlayerComponent,
    ArrowsComponent,
    ProductComponent,
    VideoPlayButtonComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
