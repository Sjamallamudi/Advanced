import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent {

  public start:number = 0;
  public end:number = 4;
  isButtonDisable = false;
  toDisplay = true;

  public Products:any[] = [
    {id: 1, pname: 'Prod1', price: '2000', catg: 'cat1', quant: '2'},
    {id: 2, pname: 'Prod2', price: '2500', catg: 'cat3', quant: '28'},
    {id: 3, pname: 'Prod3', price: '1500', catg: 'cat1', quant: '7'},
    {id: 4, pname: 'Prod4', price: '6300', catg: 'cat2', quant: '6'},
    {id: 5, pname: 'Prod5', price: '8200', catg: 'cat6', quant: '13'},
    {id: 6, pname: 'Prod6', price: '6200', catg: 'cat1', quant: '24'},
    {id: 7, pname: 'Prod7', price: '2500', catg: 'cat3', quant: '8'},
    {id: 8, pname: 'Prod8', price: '6500', catg: 'cat11', quant: '17'},
    {id: 9, pname: 'Prod9', price: '4300', catg: 'cat12', quant: '11'},
    {id: 10, pname: 'Prod10', price: '2200', catg: 'cat26', quant: '43'},
    {id: 11, pname: 'Prod11', price: '8200', catg: 'cat6', quant: '3'},
    {id: 12, pname: 'Prod12', price: '5000', catg: 'cat1', quant: '41'},
    {id: 13, pname: 'Prod13', price: '2500', catg: 'cat7', quant: '18'},
    {id: 14, pname: 'Prod14', price: '1500', catg: 'cat1', quant: '7'},
    {id: 15, pname: 'Prod15', price: '6300', catg: 'cat9', quant: '36'},
    {id: 16, pname: 'Prod16', price: '8200', catg: 'cat6', quant: '3'},
    {id: 17, pname: 'Prod17', price: '2200', catg: 'cat3', quant: '51'}
  
  ]

  public nextItems():void{
    // this.start = this.start + 4;
    this.end = this.end + 4;

    if(this.end >= this.Products.length){
      this.isButtonDisable = true;
      this.toDisplay = false;
    }
  }

}

