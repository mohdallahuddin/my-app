import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { AgePipe } from './age.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackagePipe } from './package.pipe';
import { PercentagePipe } from './percentage.pipe';
import { SquareComponent } from './square/square.component';
import { CarsComponent } from './cars/cars.component';
import { StarComponent } from './star/star.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PostComponent } from './post/post.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    EventRegistrationComponent,
    CartComponent,
    DashboardComponent,
    InterpolationComponent,
    CalculatorComponent,
    EmployeeRegistrationComponent,
    EventBindingComponent,
    LoginComponent,
    PipesComponent,
    PricePipe,
    AgePipe,
    PackagePipe,
    PercentagePipe,
    SquareComponent,
    CarsComponent,
    StarComponent,
    GpayComponent,
    BankComponent,
    VehicleComponent,
    PostComponent,
    FlipkartComponent,
    MailComponent,
    BankDetailsComponent,
    VehicleDetailsComponent,
    CreateAccountComponent,
    CreateUserComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
