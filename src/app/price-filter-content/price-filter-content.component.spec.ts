import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFilterContentComponent } from './price-filter-content.component';

describe('PriceFilterContentComponent', () => {
  let component: PriceFilterContentComponent;
  let fixture: ComponentFixture<PriceFilterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceFilterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceFilterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
