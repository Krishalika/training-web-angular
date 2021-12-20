import { TestBed } from '@angular/core/testing';

import { DiaryCardService } from './diary-card.service';

describe('DiaryCardService', () => {
  let service: DiaryCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaryCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
