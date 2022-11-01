import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  id:number = 0;
  pname:string = "";
  price:number = 0;
  catg:string = "";
  quant:number = 0;
  
  // class prod {
  //   constructor(obj:any) {
  //     var id:number = 0;
  //     var pname:string = "";
  //     var price:number = 0;
  //     var catg:string = "";
  //     var quant:number = 0;
  //   }
  // }

  public Products:any[] = []

  getProd():void{
    this.Products = [
      {id: 1, pname: 'Prod1', price: '2000', catg: 'cat1', quant: '2'},
      {id: 2, pname: 'Prod2', price: '2500', catg: 'cat3', quant: '8'},
      {id: 3, pname: 'Prod3', price: '1500', catg: 'cat1', quant: '7'},
      {id: 4, pname: 'Prod4', price: '6300', catg: 'cat2', quant: '6'},
      {id: 5, pname: 'Prod5', price: '8200', catg: 'cat6', quant: '3'},
    ]
  }

  addProd():void{
    let newprod:any ={};
    newprod.id = this.id;
    newprod.pname = this.pname;
    newprod.price = this.price;
    newprod.catg = this.catg;
    newprod.quant = this.quant;

    this.Products.push(newprod);
  }
  selectProd(id:number):void{
    let selprod:any = this.Products.find( item => item.id == id);
    this.id = selprod.id;
    this.pname = selprod.pname;
    this.price = selprod.price;
    this.catg = selprod.catg;
    this.quant = selprod.quant;
  }

  updateProd(id:number):void{
    let index  = this.Products.findIndex( item => item.id == id);
    this.Products[index].pname = this.pname;
    this.Products[index].price = this.price;
    this.Products[index].catg = this.catg;
    this.Products[index].quant = this.quant;
  }

  reset():void{
    this.Products = [];
  }

  deleteProd(id:number){
    let index  = this.Products.findIndex( item => item.id == id);
    this.Products.splice(index,1);
  }

  
}
