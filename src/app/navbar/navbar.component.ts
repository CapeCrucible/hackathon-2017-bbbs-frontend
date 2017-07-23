import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) {
    this.loginService = loginService;
   }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }

}
