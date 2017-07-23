import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpWrapper } from '../http-wrapper.service';
import { environment } from '../../environments/environment';
import { RegisterAccountRequest } from './register-account.request';
import { UserType } from '../user/user-type.enum';
import { getCode } from '../forms/state-picker/state.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private baseUrl: string;
  regForm: FormGroup;
  stateControl: FormControl;

  constructor(private http: HttpWrapper, private formBuilder: FormBuilder) {
    this.baseUrl = environment.apiUrl;
    this.stateControl = new FormControl();
  }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      statePicker: '',
      zipCode: '',
    });
  }

  register() {
    const request: RegisterAccountRequest = {
      user: {
        username: this.regForm.controls['username'].value,
        password: this.regForm.controls['password'].value,
        firstName: this.regForm.controls['firstName'].value,
        lastName: this.regForm.controls['lastName'].value,
        userType: UserType.Little
      },
      address: {
        addressLine1: this.regForm.controls['addressLine1'].value,
        addressLine2: this.regForm.controls['addressLine2'].value,
        city: this.regForm.controls['city'].value,
        state: {
          code: getCode(this.stateControl.value),
          name: this.stateControl.value
        },
        zipCode: this.regForm.controls['zipCode'].value
      },
      contactInfo: {
        email: this.regForm.controls['email'].value,
        phoneNumber: '555-123-4567'
      },
      interests: []
    };

    this.http.post(this.baseUrl + 'CreateConsolidatedUser', request).subscribe();
    console.log(this.baseUrl + 'CreateConsolidatedUser', request);
  }
}
