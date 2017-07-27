import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpWrapper } from '../http-wrapper.service';
import { environment } from '../../environments/environment';
import { ConsolidatedUserInfo } from '../user/consolidated-user-info.model';
import { UserType } from '../user/user-type.enum';
import { getCode } from '../forms/state-picker/state.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private baseUrl: string;
  regForm: FormGroup;
  stateControl: FormControl;
  interestsControl: FormControl;

  constructor(private http: HttpWrapper, private formBuilder: FormBuilder, private router: Router) {
    this.baseUrl = environment.apiUrl;
    this.stateControl = new FormControl();
    this.interestsControl = new FormControl();
  }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      email: '',
      userName: '',
      password: '',
      firstName: '',
      lastName: '',
      age: '',
      streetLine1: '',
      streetLine2: '',
      city: '',
      statePicker: '',
      zip: '',
    });

  }

  register() {
    const request: ConsolidatedUserInfo = {
      user: {
        userName: this.regForm.controls['userName'].value,
        password: this.regForm.controls['password'].value,
        firstName: this.regForm.controls['firstName'].value,
        lastName: this.regForm.controls['lastName'].value,
        age: this.regForm.controls['age'].value,
        userTypeId: UserType.Big,
        pictureUrl: null
      },
      address: {
        streetLine1: this.regForm.controls['streetLine1'].value,
        streetLine2: this.regForm.controls['streetLine2'].value,
        city: this.regForm.controls['city'].value,
        state: getCode(this.stateControl.value),
        zip: this.regForm.controls['zip'].value
      },
      contactInfo: {
        email: this.regForm.controls['email'].value,
        phoneNumber: '555-123-4567'
      },
      interests: [
        {
          id: 1,
          interestName: 'Sports'
        },
        {
          id: 6,
          interestName: 'Books'
        }
      ]
    };

    this.http
      .post(this.baseUrl + 'User/CreateConsolidatedUser', request)
      .subscribe(() => this.router.navigate(['/']));
  }
}
