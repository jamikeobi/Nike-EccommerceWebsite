import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopContainerComponent } from './shop-container/shop-container.component';
import { ShopCategoryComponent } from './shop-container/shop-category/shop-category.component';
import { ShopProductDetailsComponent } from './shop-container/shop-product-details/shop-product-details.component';
import { ShopCheckoutComponent } from './shop-container/shop-checkout/shop-checkout.component';
import { ShopCartComponent } from './shop-container/shop-cart/shop-cart.component';
import { ConfirmationComponent } from './shop-container/confirmation/confirmation.component';
import { BlogComponent } from './blog/blog.component';
import { BlogMainComponent } from './blog/blog-main/blog-main.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { LoginComponent } from './login/login.component';
import { TrackingComponent } from './tracking/tracking.component';
import { RegisterComponent } from './login/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShopContainerComponent,
    ShopCategoryComponent,
    ShopProductDetailsComponent,
    ShopCheckoutComponent,
    ShopCartComponent,
    ConfirmationComponent,
    BlogComponent,
    BlogMainComponent,
    BlogDetailsComponent,
    LoginComponent,
    TrackingComponent,
    RegisterComponent,
    ContactComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
