import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { BuypagComponent } from './buypag/buypag.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildpageComponent } from './childpage/childpage.component';
import { Parent1Component } from './parent1/parent1.component';
import { Childpage1Component } from './childpage1/childpage1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { DiscountPipe } from './discount.pipe';
import { LogoutComponent } from './logout/logout.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ReversePipe } from './reverse.pipe';
import { WordcountPipe } from './wordcount.pipe';
import { TruncatePipe } from './truncate.pipe';
import { FilterPipe } from './filter.pipe';
import { RxdemoComponent } from './rxdemo/rxdemo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ContactComponent,
    BuypagComponent,
    ProductsComponent,
    NavbarComponent,
    PagenotfoundComponent,
    ParentComponent,
    ChildComponent,
    LifecycleComponent,
    ChildpageComponent,
    Parent1Component,
    Childpage1Component,
    StudentComponent,
    DiscountPipe,
    LogoutComponent,
    AssignmentComponent,
    ReversePipe,
    WordcountPipe,
    TruncatePipe,
    FilterPipe,
    RxdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
