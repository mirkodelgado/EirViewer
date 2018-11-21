/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GateService } from './gate.service';

describe('Service: Gate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GateService]
    });
  });

  it('should ...', inject([GateService], (service: GateService) => {
    expect(service).toBeTruthy();
  }));
});
