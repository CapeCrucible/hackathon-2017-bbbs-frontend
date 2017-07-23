import { Injectable } from '@angular/core';
import { UserAccount } from './user/user-account.model';

@Injectable()
export class LoginServiceService {
  user: UserAccount;

  constructor() { }

  login(user: UserAccount) {
    this.user = user;
  }

  logout() {
    this.user = null;
  }

  getUser() {
    return !!this.user ? this.user : null;
  }

}
