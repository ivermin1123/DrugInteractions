import { TestBed } from '@angular/core/testing';

import { HoatChatService } from './hoat-chat.service';

describe('HoatChatService', () => {
  let service: HoatChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoatChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
