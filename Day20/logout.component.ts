import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router:Router, private activatedRouteObj: ActivatedRoute) { 
    sessionStorage.removeItem("AUTH_TOKEN");
  }

  signout(){
    var str  = "/";
    this.router.navigate([str]);
  }

}
