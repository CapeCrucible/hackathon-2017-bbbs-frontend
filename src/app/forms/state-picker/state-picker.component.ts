import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State, STATES } from './state.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-state-picker',
  templateUrl: './state-picker.component.html',
  styleUrls: ['./state-picker.component.css']
})
export class StatePickerComponent implements OnInit {
  @Input('control') regFormControl: FormControl;
  filteredStates: Observable<State[]>;
  states: State[];

  constructor() {
    this.states = STATES;
  }

  ngOnInit() {
    this.regFormControl.valueChanges
      .subscribe(name => {
        return this.filteredStates = Observable.of(this.filterStates(name));
      });
  }

  private filterStates(val: string): State[] {
    return val ? this.states.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.states;
  }
}
