import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserAccount } from '../user/user-account.model';
import { LoginService } from '../login.service';
import { LoginRequest } from '../login.request';
import { Router } from '@angular/router';
import { UserType } from '../user/user-type.enum';

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
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginService = loginService;
    this.router = router;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  login() {
    const request: LoginRequest = {
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value
    };
    this.loginService.login(this.router, request, this.loginCallback);
  }

  loginCallback(router, user: UserAccount) {
    console.log(user);
    if (user.userTypeId === UserType.Big) {
      router.navigate(['user-details-multiple', user]);
    }
    if (user.userTypeId === UserType.Admin) {
      router.navigate(['matches', user]);
    }
    router.navigate(['user-details', user]);
  }
}
