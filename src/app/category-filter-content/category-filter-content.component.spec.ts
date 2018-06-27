import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilterContentComponent } from './category-filter-content.component';

describe('CategoryFilterContentComponent', () => {
  let component: CategoryFilterContentComponent;
  let fixture: ComponentFixture<CategoryFilterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFilterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFilterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
