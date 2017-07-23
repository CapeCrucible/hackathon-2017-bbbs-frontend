import { Component, Input, OnInit } from '@angular/core';
import { Interest } from '../interest.model';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.css']
})
export class InterestListComponent implements OnInit {
  @Input() interests: Interest[];

  constructor() { }

  ngOnInit() {
  }

}
