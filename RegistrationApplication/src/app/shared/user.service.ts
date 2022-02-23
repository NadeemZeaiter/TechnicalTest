import { Injectable } from '@angular/core';
import { User } from './user.model';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class UserService {

  constructor(private http: HttpClient ) { }
 //constructor() { }
 
 list: User[];

 formData: User = new User();
 readonly baseURL = 'https://localhost:44318/api/Users';


 postUser()
 {
   return this.http.post(this.baseURL,this.formData);
 }
  

 refreshlist()
 {
   this.http.get(this.baseURL)
   .toPromise().then
   (res=> this.list = res as User[]);
}

 
}
 
