import { TestBed } from '@angular/core/testing';

import { StudentsdetService } from './studentsdet.service';

describe('StudentsdetService', () => {
  let service: StudentsdetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsdetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
