import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincompComponent } from './maincomp/maincomp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCardlongComponent } from './product-cardlong/product-cardlong.component';
import { ProductCarslComponent } from './product-carsl/product-carsl.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincompComponent,
    CarouselComponent,
    ProductCardComponent,
    ProductCardlongComponent,
    ProductCarslComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
