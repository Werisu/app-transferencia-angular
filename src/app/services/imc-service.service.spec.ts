/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImcService } from './imc.service';

describe('Service: ImcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImcService]
    });
  });

  it('should ...', inject([ImcService], (service: ImcService) => {
    expect(service).toBeTruthy();
  }));
});
