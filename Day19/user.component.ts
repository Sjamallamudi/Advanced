import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  public dataArray:any[] = [];
  public dataArray2:any[] = [];

  constructor( private HttpObj:HttpClient) { 
  }
  
  btnclick():void{
  let url = "https://reqres.in/api/users";
  this.HttpObj.get(url).subscribe( (Response:any)=>{
    // let Data:any[] = Response.data[]
    console.log(Response.data);
    this.dataArray = Response.data;
  });
  }
  buttonclick():void{
    let url2 = "https://www.w3schools.com/angular/customers.php";
    this.HttpObj.get(url2).subscribe( (Response:any)=>{
      console.log(Response.records);
      this.dataArray2 = Response.records;
    });
}
}