import { Injectable } from '@angular/core';
import { UserAccount } from './user/user-account.model';
import { environment } from './../environments/environment';
import { LoginRequest } from './home/login.request';
import { HttpWrapper } from './http-wrapper.service';

@Injectable()
export class LoginService {
  user: UserAccount;
  private baseUrl: string;

  constructor(
    private http: HttpWrapper,
  ) {
    this.baseUrl = environment.apiUrl;
   }

  login(request: LoginRequest) {
    this.http.post<UserAccount>(this.baseUrl + 'Login/Login', request)
      .subscribe(reply => this.user = reply);

    console.log(this.baseUrl + 'Login/Login', request);
    console.log(!!this.user ? 'Logged In' : 'Login Failed');
  }

  logout() {
    this.user = null;
    console.log('Logged Out');
  }

  getUser() {
    return !!this.user ? this.user : null;
  }
}
