// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Services
import { CookieService } from 'ngx-cookie-service';

// Pipes
import { MaxItemsPipe } from './max-items.pipe';

// Components
import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
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
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { ModalComponent } from './modal/modal.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { LeadsSubscriptionFormComponent } from './leads-subscription-form/leads-subscription-form.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { FilterComponent } from './filter/filter.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { AboutComponent } from './about/about.component';
import { PriceFilterContentComponent } from './price-filter-content/price-filter-content.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { CategoryFilterContentComponent } from './category-filter-content/category-filter-content.component';
import { RadioOptionsComponent } from './radio-options/radio-options.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
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
    PaginatorComponent,
    SubscriptionFormComponent,
    ModalComponent,
    ModalFormComponent,
    LeadsSubscriptionFormComponent,
    MenuComponent,
    SearchComponent,
    CheckboxFilterComponent,
    CategoryFilterComponent,
    FilterComponent,
    PriceFilterComponent,
    CheckboxComponent,
    FooterComponent,
    LoadingComponent,
    FeaturedCategoriesComponent,
    AboutComponent,
    PriceFilterContentComponent,
    FilterOptionsComponent,
    CategoryFilterContentComponent,
    MaxItemsPipe,
    RadioOptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
