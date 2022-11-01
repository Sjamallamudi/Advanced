import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp-crud',
  templateUrl: './emp-crud.component.html',
  styleUrls: ['./emp-crud.component.css']
})
export class EmpCRUDComponent {
  name:string  = "";
  city:string  = "";
  email:string  = "";
  age:number = 0;
  studentId:number = 0;

  public studentsArray:any[] =  [];

  constructor(private  serviceObj:DataService) {
    
  }

 
  public getData_click(){	 
    this.serviceObj.getAllStudents().subscribe( (response:any) =>{
      this.studentsArray = response;
    });
  }

  public addData_click(){	 
    let stObj:any = {};
    stObj.studentId = 0;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;

    this.serviceObj.addStudent(stObj).subscribe( (response:any) =>{
      // this.studentsArray = response;
      // alert("New Student details are added to server");
      this.getData_click();
    });
  }


  public selectData_click(id:number){	 
    this.serviceObj.getStudentById(id).subscribe( (resData:any) =>{
      this.studentId = id;
    this.name = resData.name;
    this.email = resData.email;
    this.city = resData.city;
    this.age = resData.age;
    });
  }

  public deleteData_click(id:number){	 
    this.serviceObj.deleteStudent(id).subscribe( (resData:any) =>{
    alert("Selected Student details are deleted from  server");
    this.getData_click();
    });
  }

  public updateData_click(id:number){	
    let stObj:any = {};
    // this.serviceObj.getAllStudents().subscribe( (response:any) =>{
    //   this.studentsArray = response;
    // });
    // stObj.studentId = this.studentsArray.findIndex( item => item.studentId == id);
    // console.log(id);
    stObj.studentId = id;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;
    this.serviceObj.updateStudent(stObj).subscribe( (response:any) =>{
    alert("New Student details are updated to server");
    this.getData_click();
    });
       
  }

  public clear_click(){
    this.studentsArray = [];
  }

}

