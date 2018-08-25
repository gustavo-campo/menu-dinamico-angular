import { TestBed, inject } from '@angular/core/testing';

import { MensajeroService } from './mensajero.service';

describe('MensajeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensajeroService]
    });
  });

  it('should be created', inject([MensajeroService], (service: MensajeroService) => {
    expect(service).toBeTruthy();
  }));
});
