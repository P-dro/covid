import { TestBed } from '@angular/core/testing';

import { PainelCovidService } from './painel-covid.service';

describe('PainelCovidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PainelCovidService = TestBed.get(PainelCovidService);
    expect(service).toBeTruthy();
  });
});
