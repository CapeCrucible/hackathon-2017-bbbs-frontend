import { Component, Input, OnInit } from '@angular/core';
import { ConsolidatedUserInfo } from '../consolidated-user-info.model';
import { UserType } from '../user-type.enum';
import { HttpWrapper } from '../../http-wrapper.service';
import { environment } from './../../../environments/environment';
import { LoginRequest } from '../../login.request';
import { UserAccount } from '../user-account.model';
import { ActivatedRoute, Params } from '@angular/router';
import { MatchedBigLittleParentModel } from '../matched-big-little-parent.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  private baseUrl: string;
  consolidatedUser: ConsolidatedUserInfo;

  constructor(
    private http: HttpWrapper,
    private activatedRoute: ActivatedRoute
  ) {
    this.baseUrl = environment.apiUrl;
    this.activatedRoute.params.subscribe((user: UserAccount) => {
      if (user.userTypeId === UserType.Admin) {
          this.http
          .get<ConsolidatedUserInfo>(this.baseUrl + 'User/GetConsolidatedUserInfo/' + user.id)
          .subscribe(reply => this.consolidatedUser = reply);
      } else {
          this.http
          .get<MatchedBigLittleParentModel>(this.baseUrl + 'UserMapping/GetMatchByUserAccountId/' + user.id)
          .subscribe(reply => this.consolidatedUser = reply.big);
      }
    });
  }

  ngOnInit() {
  }
}
