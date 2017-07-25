import { Component, OnInit } from '@angular/core';
import { ConsolidatedUserInfo } from '../consolidated-user-info.model';
import { HttpWrapper } from '../../http-wrapper.service';
import { ActivatedRoute } from '@angular/router';
import { UserAccount } from '../user-account.model';
import { environment } from './../../../environments/environment';
import { UserType } from '../user-type.enum';
import { MatchedBigLittleParentModel } from '../matched-big-little-parent.model';

@Component({
  selector: 'app-user-details-multiple',
  templateUrl: './user-details-multiple.component.html',
  styleUrls: ['./user-details-multiple.component.css']
})
export class UserDetailsMultipleComponent implements OnInit {
  public baseUrl: string;
  public consolidatedParent: ConsolidatedUserInfo;
  public consolidatedLittle: ConsolidatedUserInfo;

  constructor(
    public http: HttpWrapper,
    public activatedRoute: ActivatedRoute
  ) {
    this.baseUrl = environment.apiUrl;
    this.activatedRoute.params.subscribe((user: UserAccount) => {
      this.http
      .get<MatchedBigLittleParentModel>(this.baseUrl + 'UserMapping/GetMatchByUserAccountId/' + user.id)
      .subscribe(reply => {
        this.consolidatedLittle = reply.little;
        this.consolidatedParent = reply.parent;
      });
    });
  }

  ngOnInit() {
  }
}
