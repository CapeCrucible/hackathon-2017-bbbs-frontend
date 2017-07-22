import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpWrapper } from '../http-wrapper.service';
import { environment } from '../../environments/environment';
import { RegisterAccountRequest } from './register-account.request';
import { UserType } from '../user/user-type.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private baseUrl: string;
  stateControl: FormControl;

  constructor(private http: HttpWrapper) {
    this.baseUrl = environment.apiUrl;
    this.stateControl = new FormControl();
  }


  register() {
    const request: RegisterAccountRequest = {
      user: {
        username: 'someuser',
        password: 'pass',
        firstName: 'Bobby',
        lastName: 'Bacon',
        userType: UserType.Little
      },
      address: {
        addressLine1: '339 Broadway',
        addressLine2: '',
        city: 'Cape Girardeau',
        state: {
          code: 'MO',
          name: 'Missouri'
        },
        zipCode: '63701'
      },
      contactInfo: {
        email: 'bbbs@capecrucible.org',
        phoneNumber: '5551234567'
      },
      interests: [
        {
          title: 'Skateboarding'
        },
        {
          title: 'Basketball'
        }
      ]
    };

    this.http.post(this.baseUrl, request);
  }
}
