import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
btnClick(){
  //this.router.navigateByUrl('./User/admin-view-admin-view.component.html');
}
}
