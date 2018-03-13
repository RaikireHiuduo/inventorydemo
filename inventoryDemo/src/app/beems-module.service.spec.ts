import { TestBed, inject } from '@angular/core/testing';

import { BEEMSModuleService } from './beems-module.service';

describe('BEEMSModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BEEMSModuleService]
    });
  });

  it('should be created', inject([BEEMSModuleService], (service: BEEMSModuleService) => {
    expect(service).toBeTruthy();
  }));
});
