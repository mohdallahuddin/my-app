import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostComponent } from './post/post.component';
import { SquareComponent } from './square/square.component';
import { StarComponent } from './star/star.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'calculator',component:CalculatorComponent},
    {path:'interpolation',component:InterpolationComponent},
    {path:'event-binding',component:EventBindingComponent},
    {path:'square',component:SquareComponent},
    {path:'event-registration',component:EventRegistrationComponent},
    {path:'employee-registration',component:EmployeeRegistrationComponent},
    {path:'cart',component:CartComponent},
    {path:'pipes',component:PipesComponent},
    {path:'cars',component:CarsComponent},
    {path:'star',component:StarComponent},
    {path:'gpay',component:GpayComponent},
    {path:'bank',component:BankComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'post',component:PostComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'bank-details/:id',component:BankDetailsComponent},
    {path:'vehicle-details/:id',component:VehicleComponent},
    {path:'create-account',component:CreateAccountComponent}

  ]},

  {path:'',component:LoginComponent},
  
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }