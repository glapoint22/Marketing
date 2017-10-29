import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayButtonComponent } from './video-play-button.component';

describe('VideoPlayButtonComponent', () => {
  let component: VideoPlayButtonComponent;
  let fixture: ComponentFixture<VideoPlayButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
