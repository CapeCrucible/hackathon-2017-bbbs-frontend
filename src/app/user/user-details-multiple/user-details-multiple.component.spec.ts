import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsMultipleComponent } from './user-details-multiple.component';

describe('UserDetailsMultipleComponent', () => {
  let component: UserDetailsMultipleComponent;
  let fixture: ComponentFixture<UserDetailsMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
