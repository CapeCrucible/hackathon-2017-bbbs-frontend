import { Component, OnInit } from '@angular/core';
import { HttpWrapper } from '../../http-wrapper.service';
import { UserAccount } from '../../user/user-account.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../../../environments/environment';
import { ConsolidatedUserInfo } from '../../user/consolidated-user-info.model';
import { Interest } from '../../user/interest.model';
import { ParentLittleModel } from './ParentLittleModel';
import { Router } from '@angular/router';

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

  parentLittle: ParentLittleModel;

  sharedInterests: Interest[];

  constructor(private httpWrapper: HttpWrapper, private router: Router, ) {
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
    /*this.httpWrapper
      .get<ParentLittleModel>(this.baseUrl + 'User/GetParentLittleModel?littleId=' + user.id)
      .subscribe(info => {
        const parentLittle: ParentLittleModel = info;
        this.selectedLittle = parentLittle.Little; // info.Little as ConsolidatedUserInfo;
        this.selectedLittleParent = parentLittle.Parent; // info.Parent as ConsolidatedUserInfo;
        console.log(info);
        console.log(parentLittle.Little);
        console.log(parentLittle.Parent);
        console.log(this.selectedLittle);
        console.log(this.selectedLittleParent);
        this.loadSharedInterests();
      });*/

    this.httpWrapper
      .get<ConsolidatedUserInfo>(this.baseUrl + 'User/GetConsolidatedUserInfo/' + user.id)
      .subscribe(info => {
        this.selectedLittle = info;
        console.log('INFO' + info);
        this.loadSharedInterests();
      });

    console.log(this.selectedLittle);
    this.httpWrapper
      .get<ConsolidatedUserInfo>(this.baseUrl + 'UserMapping/FindParentForLittle/' + user.id)
      .subscribe(pinfo => {
        console.log('PINFO' + pinfo);
        console.log(this);
        this.selectedLittleParent = pinfo;
      });
    console.log(this.selectedLittleParent);
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
      .post(this.baseUrl + 'UserMapping/CreateBigLittleParentMap', request)
      .subscribe((thing: any) => this.router.navigate(['matches', thing.littleId]));
  }

  loadSharedInterests() {
    if (!this.selectedBig || !this.selectedLittle) {
      this.sharedInterests = [];
      return;
    }

    this.httpWrapper
      .get<Interest[]>(this.baseUrl + 'Interest/GetSharedInterests/'
      + this.selectedBig.user.id + '/' + this.selectedLittle.user.id)
      .subscribe(interests => this.sharedInterests = interests);
  }
}
