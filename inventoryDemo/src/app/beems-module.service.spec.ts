import { TestBed, inject } from '@angular/core/testing';

import { BeemsModuleService } from './beems-module.service';

describe('BeemsModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeemsModuleService]
    });
  });

  it('should be created', inject([BeemsModuleService], (service: BeemsModuleService) => {
    expect(service).toBeTruthy();
  }));
});
