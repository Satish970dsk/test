import { TestBed } from '@angular/core/testing';

import { MyglobalerrorService } from './myglobalerror.service';

describe('MyglobalerrorService', () => {
  let service: MyglobalerrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyglobalerrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
