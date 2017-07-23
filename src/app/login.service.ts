import { Injectable } from '@angular/core';
import { UserAccount } from './user/user-account.model';

@Injectable()
export class LoginService {
  user: UserAccount;

  constructor() { }

  login(user: UserAccount) {
    this.user = user;
    console.log('Logged In');
  }

  logout() {
    this.user = null;
    console.log('Logged Out');
  }

  getUser() {
    return !!this.user ? this.user : null;
  }

}
