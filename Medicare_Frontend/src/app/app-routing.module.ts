import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { CartComponent } from './cart/cart.component';
import { UserpageComponent } from './userpage/userpage.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'Userlogin', component:UserloginComponent},
  {path : 'Adminlogin', component:AdminLoginComponent},
  {path : 'User', component:UserComponent},
  {path : 'Admin', component:AdminComponent},
  {path : 'Product', component:ProductComponent},
  {path : 'AddProduct', component:CreateProductComponent},
  {path : 'UpdateProduct/:id', component:UpdateProductComponent},
  {path : 'Admin/UpdateProduct', component:ManageProductsComponent},
  {path : 'Admin/addAdmin', component:AddAdminComponent},
  {path : 'user/:id', component:UserpageComponent},
  {path : 'cart/:id', component:CartComponent},
  {path : 'payment/:id', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
