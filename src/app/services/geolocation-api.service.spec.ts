import { TestBed } from '@angular/core/testing';

import { GeolocationApiService } from './geolocation-api.service';

describe('GeolocationApiService', () => {
  let service: GeolocationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
