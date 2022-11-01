import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeswitch',
  templateUrl: './pipeswitch.component.html',
  styleUrls: ['./pipeswitch.component.css']
})
export class PipeswitchComponent {
  public  studentsArray:any[] = [
    {sname  :  "Scott", Grade: 1},
    {sname  :  "Smith", Grade: 2},
    {sname  :  "Smith", Grade: 4},
    {sname  :  "James", Grade: 1},
    {sname  :  "Adam",  Grade: 3},
    {sname  :  "Sathya",Grade: 4},
    {sname  :  "Mark",  Grade: 2},
    {sname  :  "Peter", Grade: 1},
    {sname  : "Maneesh", Grade: 3},
    {sname  :  "Ramesh", Grade: 2},
    {sname  :  "Vinush", Grade: 4},
    {sname  :  "Haneesh", Grade: 3}
   ];
}

