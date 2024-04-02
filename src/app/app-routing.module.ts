import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-header-container/home/home.component';
import { ShopCategoryComponent } from './shop-container/shop-category/shop-category.component';
import { ShopProductDetailsComponent } from './shop-container/shop-product-details/shop-product-details.component';
import { ShopCheckoutComponent } from './shop-container/shop-checkout/shop-checkout.component';
import { ShopCartComponent } from './shop-container/shop-cart/shop-cart.component';
import { ConfirmationComponent } from './shop-container/confirmation/confirmation.component';
import { BlogMainComponent } from './blog/blog-main/blog-main.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { LoginComponent } from './login/login.component';
import { TrackingComponent } from './tracking/tracking.component';
import { RegisterComponent } from './login/register/register.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Shop-category', component: ShopCategoryComponent},
  {path: 'Shop-ProductDetails', component: ShopProductDetailsComponent},
  {path: 'Shop-checkout', component: ShopCheckoutComponent},
  {path: 'Shop-cart', component: ShopCartComponent},
  {path: 'Confirmation', component: ConfirmationComponent},
  {path: 'Blog-main', component: BlogMainComponent},
  {path: 'Blog-details', component: BlogDetailsComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Tracking', component: TrackingComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'Contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
