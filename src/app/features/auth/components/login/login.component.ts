import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  users: any[];
  selectedUser: any;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      userControl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onUserChange(user: any) {
    this.selectedUser = user;
  }

  submit() {
    this.userService.setUser(this.selectedUser);
    console.log(this.userService.getUser());
    this.router.navigate(["home"]);
  }

}