import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
  Products = [
    {id: 1, pname: 'Prod1', price: '2000', catg: 'cat1', quant: '2'},
    {id: 2, pname: 'Prod2', price: '2500', catg: 'cat3', quant: '8'},
    {id: 3, pname: 'Prod3', price: '1500', catg: 'cat1', quant: '7'},
    {id: 4, pname: 'Prod4', price: '6300', catg: 'cat2', quant: '6'},
    {id: 5, pname: 'Prod5', price: '8200', catg: 'cat6', quant: '3'},
  ];
  proObj:any = {};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params["id"];
    this.proObj=  this.Products.find(item => item.id==id);
  }

}
