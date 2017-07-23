import { Component, OnInit } from '@angular/core';
import { HttpWrapper } from '../../http-wrapper.service';
import { UserAccount } from '../../user/user-account.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../../environments/environment';
import { ConsolidatedUserInfo } from '../../user/consolidated-user-info.model';
import { Interest } from '../../user/interest.model';

@Component({
  selector: 'app-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {
  private baseUrl: string;
  bigs: ReplaySubject<UserAccount[]>;
  littles: ReplaySubject<UserAccount[]>;

  selectedBig: ConsolidatedUserInfo;
  selectedLittle: ConsolidatedUserInfo;
  selectedLittleParent: ConsolidatedUserInfo;

  sharedInterests: Interest[];

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
      .subscribe(info => {
        this.selectedBig = info;
        this.loadSharedInterests();
      });
  }

  onLittleSelected(user: UserAccount): void {
    this.httpWrapper
      .get<ConsolidatedUserInfo>(this.baseUrl + 'User/GetConsolidatedUserInfo/' + user.id)
      .subscribe(info => {
        this.selectedLittle = info;
        this.loadSharedInterests();
      });
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

  createMatch() {
    const request: any = {
      littleId: this.selectedLittle.user.id,
      bigId: this.selectedBig.user.id
    };

    this.httpWrapper
      .post(this.baseUrl + 'UserMapping/CreateBigLittleParentMap', request).subscribe();
  }

  loadSharedInterests() {
    if (!this.selectedBig && !this.selectedLittle) {
      this.sharedInterests = [];
      return;
    }

    this.httpWrapper
      .get<Interest[]>(this.baseUrl + 'Interest/GetSharedInterests/'
        + this.selectedBig.user.id + '/' + this.selectedLittle.user.id)
      .subscribe(interests => this.sharedInterests = interests);
  }
}
