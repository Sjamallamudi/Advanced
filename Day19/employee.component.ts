import { Component /*, OnInit */} from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{ 
  public employees:any[] = [];

  constructor(private emparry:DataserviceService){ }
  getdata(){
  //   let employee:any[] = [];
    this.employees = this.emparry.getEmp();
    return this.employees;
  }
  
  // public Eid:number= 2345;
  // public EmpName:string = "sravya";
  // public job:string = "Manager";
  // public salary:number = 64000;

}

