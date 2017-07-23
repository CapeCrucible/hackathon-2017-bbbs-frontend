import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginRequest } from './login.request';
import { UserAccount } from '../user/user-account.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  user: UserAccount;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginService = loginService;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  login() {
    const request: LoginRequest = {
      loginCredentials: {
        username: this.loginForm.controls['userName'].value,
        password: this.loginForm.controls['password'].value
      }
    };
    this.loginService.login(request);
  }
}
