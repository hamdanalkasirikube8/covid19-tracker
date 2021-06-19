import { TestBed } from '@angular/core/testing';

import { PersonManagementService } from './person-management.service';

describe('PersonManagementService', () => {
  let service: PersonManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
