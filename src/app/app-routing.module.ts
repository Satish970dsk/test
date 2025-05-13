import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { BuypagComponent } from './buypag/buypag.component';
import { ProductsComponent } from './products/products.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { Parent1Component } from './parent1/parent1.component';
import { StudentComponent } from './student/student.component';
import { securityguardGuard } from './securityguard.guard';
import { LogoutComponent } from './logout/logout.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { RxdemoComponent } from './rxdemo/rxdemo.component';

const routes: Routes = [
{
    path:'',
    component:HomeComponent
},
{
    path:'home',
    component:HomeComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'register',
  component:RegistrationComponent
},
{
  path:'buypage',
  component:BuypagComponent,
  canActivate:[securityguardGuard]
},
{
  path:'products',
 component:ProductsComponent
},
{
  path:'parent',
 component:ParentComponent
},
{
  path:'parent1',
 component:Parent1Component
},
{
  path:'lifecycle',
 component:LifecycleComponent
},
{
  path:'student',
 component:StudentComponent
},
{
  path:'assign',
 component:AssignmentComponent
},
{
  path:'logout',
 component:LogoutComponent
},
{
  path:'rxdemo',
 component:RxdemoComponent
},
{
  path:'**',
 component:PagenotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
