import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{
  Pamt:number = 0;
  rate:number = 0;
  time:number = 0;
  interest:number=0;
  //result:number = 0;

  SimpleInt():number{
    this.interest = (this.Pamt*this.rate*this.time)/100;
    return this.interest;
  }
}

