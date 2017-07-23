import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserAccount } from '../../user/user-account.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input('users') list: Observable<UserAccount[]>;
  @Output('userSelected') userSelected: EventEmitter<number>;

  constructor() {
    this.userSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  select(item: UserAccount) {
    this.userSelected.emit(item.id);
  }
}
