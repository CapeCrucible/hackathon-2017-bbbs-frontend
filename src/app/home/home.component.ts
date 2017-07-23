import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpWrapper } from '../http-wrapper.service';
import { environment } from '../../environments/environment';
import { LoginRequest } from './login.request';
import { UserAccount } from '../user/user-account.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private baseUrl: string;
  loginForm: FormGroup;
  user: UserAccount;

  constructor(
    private http: HttpWrapper,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.baseUrl = environment.apiUrl;
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
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value
      }
    };

    this.http.post<UserAccount>(this.baseUrl + 'Login', request)
      .subscribe(reply => this.loginService.login(reply));
    console.log(this.baseUrl + 'Login', request);
  }
}
