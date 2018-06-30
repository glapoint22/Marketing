import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioFilterOptionsComponent } from './radio-filter-options.component';

describe('RadioOptionsComponent', () => {
  let component: RadioFilterOptionsComponent;
  let fixture: ComponentFixture<RadioFilterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioFilterOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioFilterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
