import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SwitchComponent } from './switch/switch.component';
import { SliceComponent } from './slice/slice.component';
import { PipeswitchComponent } from './pipeswitch/pipeswitch.component';
import { SwitchpipePipe } from './switchpipe.pipe';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpHttpJSONComponent } from './emp-http-json/emp-http-json.component';
import { EmpCRUDComponent } from './emp-crud/emp-crud.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CalculatorComponent,
    LoginComponent,
    ProductsComponent,
    SwitchComponent,
    SliceComponent,
    PipeswitchComponent,
    SwitchpipePipe,
    UserComponent,
    EmpHttpJSONComponent,
    EmpCRUDComponent,
    ProdDetailsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
