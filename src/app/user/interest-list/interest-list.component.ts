import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Interest } from '../interest.model';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.css']
})
export class InterestListComponent implements OnInit {
  @Input() interests: Interest[];
  @Output() interestClicked: EventEmitter<Interest>;

  constructor() {
    this.interestClicked = new EventEmitter();
  }

  ngOnInit() {
  }

  select(interest: Interest) {
    this.interestClicked.emit(interest);
  }
}
