import { TestBed, inject } from '@angular/core/testing';

import { ShowModalService } from './show-modal.service';

describe('ShowModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowModalService]
    });
  });

  it('should be created', inject([ShowModalService], (service: ShowModalService) => {
    expect(service).toBeTruthy();
  }));
});
