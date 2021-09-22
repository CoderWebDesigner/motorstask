import { TestBed } from '@angular/core/testing';

import { MotorschartService } from './motorschart.service';

describe('MotorschartService', () => {
  let service: MotorschartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorschartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
