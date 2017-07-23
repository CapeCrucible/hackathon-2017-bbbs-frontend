import { Component, OnInit } from '@angular/core';
import { HttpWrapper } from '../http-wrapper.service';
import { UserAccount } from '../user/user-account.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-details',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  users: Subject<UserAccount[]>;

  constructor(private httpWrapper: HttpWrapper) {
    this.bigs = new ReplaySubject(1);
  }

  ngOnInit() {
    this.httpWrapper
      .get<UserAccount[]>('UserMapping/FindUnmatchedBigs')
      .subscribe(bigs => this.bigs.next(bigs));
  }

}
