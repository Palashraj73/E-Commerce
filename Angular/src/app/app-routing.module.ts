import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { GadgetsComponent } from './home/category/gadgets/gadgets.component';
import { LaptopsComponent } from './home/category/laptops/laptops.component';
import { MobilesComponent } from './home/category/mobiles/mobiles.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'mobiles', component:MobilesComponent},
  {path: 'laptops' ,component:LaptopsComponent},
  {path: 'gadgets' ,component:GadgetsComponent},
  {path: 'cart' , component: CartComponent},
  {path: 'products', component: HomeComponent},
  {path: 'products/:productId', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
