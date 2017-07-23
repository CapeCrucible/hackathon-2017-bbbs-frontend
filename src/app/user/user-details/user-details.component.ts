import { Component, Input, OnInit } from '@angular/core';
import { ConsolidatedUserInfo } from '../consolidated-user-info.model';
import { UserType } from '../user-type.enum';
import { HttpWrapper } from '../../http-wrapper.service';
import { environment } from './../../../environments/environment';
import { LoginRequest } from '../../login.request';
import { UserAccount } from '../user-account.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  private baseUrl: string;
  private consolidatedUser: ConsolidatedUserInfo;

  user: UserAccount;
  constructor(
    private http: HttpWrapper
  ) {
    this.baseUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.http.get<ConsolidatedUserInfo>(
      this.baseUrl + 'User/GetConsolidatedUserInfo/' + this.user.id)
    .subscribe(reply => {
      this.consolidatedUser = reply;
    });
  }
}
