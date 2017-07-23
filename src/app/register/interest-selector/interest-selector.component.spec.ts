import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestSelectorComponent } from './interest-selector.component';

describe('InterestSelectorComponent', () => {
  let component: InterestSelectorComponent;
  let fixture: ComponentFixture<InterestSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
