import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { PaymentComponent } from './payment/payment.component';
import { UserpageComponent } from './userpage/userpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    UserComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    AdminLoginComponent,
    UserloginComponent,
    UpdateProductComponent,
    CreateProductComponent,
    ManageProductsComponent,
    AddAdminComponent,
    PaymentComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
