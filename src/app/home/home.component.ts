import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpWrapper } from '../http-wrapper.service';
import { environment } from '../../environments/environment';
import { LoginRequest } from './login.request';
import { UserAccount } from '../user/user-account.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private baseUrl: string;
  loginForm: FormGroup;
  user: UserAccount;

  constructor(private http: HttpWrapper, private formBuilder: FormBuilder) {
    this.baseUrl = environment.apiUrl;
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

    this.http.post<UserAccount>(this.baseUrl + 'Login', request).subscribe(reply => this.user = reply);
    console.log(this.baseUrl + 'Login', request);
  }
}
