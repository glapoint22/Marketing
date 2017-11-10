import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsSubscriptionFormComponent } from './leads-subscription-form.component';

describe('LeadsSubscriptionFormComponent', () => {
  let component: LeadsSubscriptionFormComponent;
  let fixture: ComponentFixture<LeadsSubscriptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsSubscriptionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsSubscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
