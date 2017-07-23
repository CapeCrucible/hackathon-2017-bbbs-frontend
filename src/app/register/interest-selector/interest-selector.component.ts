import { Component, Input, OnInit } from '@angular/core';
import { Interest, INTERESTS } from '../../user/interest.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-interest-selector',
  templateUrl: './interest-selector.component.html',
  styleUrls: ['./interest-selector.component.css']
})
export class InterestSelectorComponent implements OnInit {
  @Input() inputControl: FormControl;
  @Input('control') control: FormControl;
  filteredInterests: Observable<Interest[]>;
  allInterests: Interest[];

  selectedInterests: Set<Interest>;

  constructor() {
    this.inputControl = new FormControl();
    this.allInterests = INTERESTS;
    this.selectedInterests = new Set();
  }

  ngOnInit() {
    this.inputControl.valueChanges
      .subscribe(name => {
        return this.filteredInterests = Observable.of(this.filterInterests(name));
      });
  }

  select() {
    const interest = this.getInterestByName(this.inputControl.value);

    if (interest) {
      this.selectedInterests.add(interest);

      this.inputControl.setValue('');
      this.inputControl.updateValueAndValidity();
    }

    this.control.setValue(this.selectedInterests);
    this.control.updateValueAndValidity();
  }

  deselect(interest: Interest) {
    if (interest) {
      this.selectedInterests.delete(interest);
    }

    this.control.setValue(this.selectedInterests);
    this.control.updateValueAndValidity();
  }

  private filterInterests(val: string): Interest[] {
    return val ? this.allInterests.filter(i => i.interestName.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.allInterests;
  }

  private getInterestByName(name: string): Interest {
    return this.allInterests.find(i => i.interestName === name);
  }
}
