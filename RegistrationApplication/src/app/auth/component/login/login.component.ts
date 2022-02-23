import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/shared/user.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(public service : UserService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }
  
}
