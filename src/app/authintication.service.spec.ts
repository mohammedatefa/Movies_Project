import { TestBed } from '@angular/core/testing';

import { AuthinticationService } from './authintication.service';

describe('AuthinticationService', () => {
  let service: AuthinticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthinticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
