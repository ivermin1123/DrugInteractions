import { TestBed } from '@angular/core/testing';

import { TuongTacService } from './tuong-tac.service';

describe('TuongTacService', () => {
  let service: TuongTacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuongTacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
