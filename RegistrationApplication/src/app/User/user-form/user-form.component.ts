import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(public service:UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    this.service.postUser().subscribe(
      res => {
          this.resetForm(form);
          this.toastr.success('Registration Succesfull!',"New User RegisteredQ")
      },
      err=>{ console.log(err); }
    );
  }
resetForm(form:NgForm){
  form.form.reset();
  this.service.formData = new User();
}
}
