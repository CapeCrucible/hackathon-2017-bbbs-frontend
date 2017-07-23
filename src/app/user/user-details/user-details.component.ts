import { Component, Input, OnInit } from '@angular/core';
import { ConsolidatedUserInfo } from './../consolidated-user-info.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
    @Input('user') user: ConsolidatedUserInfo;
    constructor() {
    }

  ngOnInit() {
  }

  generateColors() {
      return Math.floor(Math.random() * 16777215).toString(16);
  }

}
