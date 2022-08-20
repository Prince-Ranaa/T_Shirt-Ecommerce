import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { ColorPipe } from './pipes/color.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { PricePipe } from './pipes/price.pipe';
import { TypePipe } from './pipes/type.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    SearchPipe,
    ColorPipe,
    GenderPipe,
    PricePipe,
    TypePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
