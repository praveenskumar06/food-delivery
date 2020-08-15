import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services/user.service';

import { User } from '../_models/user';

import { Restaurant } from '../_models/restaurant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorMessage: string;
  username: string ;
  password: string ;
  id: number;
  user: User = {
    id: 3,
    username: '',
    password: ''
  };
 //users: User[];


  constructor(private userService: UserService, private router: Router) {
    //display all previous users
   //this.userService.getAll().subscribe(users => this.users = users);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.validateUsers(this.username, this.password).subscribe(status => {
      if (status){
        this.router.navigate(['/', 'search']);
      } else {
        this.errorMessage = 'Invalid cerdentials';
        this.router.navigate(['/', 'login']);
      }
    });
  }

}
