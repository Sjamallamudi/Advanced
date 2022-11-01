import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './auth-gaurd.service';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { ProductsComponent } from './products/products.component';
import { SwitchComponent } from './switch/switch.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path :  "", component : LoginComponent },
  { path :  "Emps", component : EmployeeComponent , canActivate : [AuthGaurdService]},
  { path :  "Products", component : ProductsComponent, canActivate : [AuthGaurdService] },
  { path :  "Switch", component : SwitchComponent },
  { path :  "ProdDetails/:id", component : ProdDetailsComponent },
  { path :  "Logout", component : LogoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
