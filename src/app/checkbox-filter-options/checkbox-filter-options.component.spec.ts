import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFilterOptionsComponent } from './checkbox-filter-options.component';

describe('CheckboxFilterOptionsComponent', () => {
  let component: CheckboxFilterOptionsComponent;
  let fixture: ComponentFixture<CheckboxFilterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFilterOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFilterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
