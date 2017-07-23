import { Component, Input, OnInit } from '@angular/core';
import { UserAccount } from '../user-account.model';
import { ContactInfo } from '../contact-info.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  @Input() user: UserAccount;
  @Input() contactInfo: ContactInfo;

  constructor() {
  }

  ngOnInit() {
  }

}
