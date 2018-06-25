import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFilterContentComponent } from './checkbox-filter-content.component';

describe('CheckboxFilterContentComponent', () => {
  let component: CheckboxFilterContentComponent;
  let fixture: ComponentFixture<CheckboxFilterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFilterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFilterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
