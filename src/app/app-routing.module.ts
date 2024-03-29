import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ForgetpaaswordComponent } from './components/forgetpaasword/forgetpaasword.component';


const routes: Routes = [
  {path:'',
  canActivate:[authGuard],
  
  component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'setting',loadChildren:()=>import('./components/setting/setting.module').then((m)=>m.SettingModule)},
    {path:'products',component:ProductsComponent},
    {path:'categorydetails/:id',component:CategorydetailsComponent},
    {path:'checkout/:id',component:CheckoutComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'brands',component:BrandsComponent},
    {path:'forgetpaasword',component:ForgetpaaswordComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'categories',component:CategoriesComponent},
   
  ]},
  {path:'',component:AuthLayoutComponent, children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent} ,
    {path:'forget',component:ForgetpaaswordComponent}
  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
