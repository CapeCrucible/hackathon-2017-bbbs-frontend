import { Component, OnInit } from '@angular/core';
import { HttpWrapper } from '../http-wrapper.service';
import { UserAccount } from '../user/user-account.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../environments/environment';
import { ConsolidatedUserInfo } from '../user/consolidated-user-info.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  private baseUrl: string;
  bigs: ReplaySubject<UserAccount[]>;
  littles: ReplaySubject<UserAccount[]>;

  selectedBig: ConsolidatedUserInfo;
  selectedLittle: ConsolidatedUserInfo;
  selectedLittleParent: ConsolidatedUserInfo;

  constructor(private httpWrapper: HttpWrapper) {
    this.baseUrl = environment.apiUrl;
    this.bigs = new ReplaySubject(1);
    this.littles = new ReplaySubject(1);
  }

  ngOnInit() {
    this.httpWrapper
      .get<UserAccount[]>(this.baseUrl + 'UserMapping/FindUnmatchedLittles')
      .subscribe(users => this.littles.next(users));
    this.httpWrapper
      .get<UserAccount[]>(this.baseUrl + 'UserMapping/FindUnmatchedBigs')
      .subscribe(users => this.bigs.next(users));
  }

  onBigSelected(user: UserAccount): void {
    this.httpWrapper
      .get<ConsolidatedUserInfo>(this.baseUrl + 'User/GetConsolidatedUserInfo/' + user.id)
      .subscribe(info => this.selectedBig = info);
  }

  onLittleSelected(user: UserAccount): void {
    this.httpWrapper
      .get<ConsolidatedUserInfo>(this.baseUrl + 'User/GetConsolidatedUserInfo/' + user.id)
      .subscribe(info => this.selectedLittle = info);
    this.httpWrapper
      .get<ConsolidatedUserInfo>(this.baseUrl + 'UserMapping/FindParentForLittle/' + user.id)
      .subscribe(info => this.selectedLittleParent = info);
  }

  deselectLittle() {
    this.selectedLittle = null;
    this.selectedLittleParent = null;
  }

  deselectBig() {
    this.selectedBig = null;
  }
}
