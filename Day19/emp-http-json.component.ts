import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-emp-http-json',
  templateUrl: './emp-http-json.component.html',
  styleUrls: ['./emp-http-json.component.css']
})
export class EmpHttpJSONComponent {
  public empArray:any[] = [];

  constructor( private HttpObj:HttpClient) { 
  }
  
  btnclick():void{
  let url = "http://localhost:3000/emps";
  this.HttpObj.get(url).subscribe( (Response:any)=>{
    this.empArray = Response;
  });
  }
}
