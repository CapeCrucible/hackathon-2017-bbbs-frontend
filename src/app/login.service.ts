import { Injectable } from '@angular/core';
import { UserAccount } from './user/user-account.model';
import { environment } from './../environments/environment';
import { HttpWrapper } from './http-wrapper.service';
import { LoginRequest } from './login.request';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  user: UserAccount;
  private baseUrl: string;

  constructor(
    private http: HttpWrapper,
  ) {
    this.baseUrl = environment.apiUrl;
  }

  login(router: Router, request: LoginRequest, callback: Function) {
    this.http.post<UserAccount>(this.baseUrl + 'Login/Login', request)
      .subscribe(reply => {
        this.user = reply;
        callback(router, reply);
      });

    console.log(this.baseUrl + 'Login/Login', request);
  }

  logout() {
    this.user = null;
    console.log('Logged Out');
  }

  getUser() {
    return !!this.user ? this.user : null;
  }
}
