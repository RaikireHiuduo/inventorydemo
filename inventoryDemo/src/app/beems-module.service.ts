import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { BEEMSModule } from './beems-module';
import { BEEMSMODULES } from './beems-module-list';
import { MessageService } from './message.service';

@Injectable()
export class BEEMSModuleService {
  
  getBEEMSModules(): Observable<BEEMSModule[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('BEEMSModuleService: fetched all modules');
    return of(BEEMSMODULES);
  }

  getBEEMSModule(urn: string): Observable<BEEMSModule> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`BEEMSModuleService: fetched module id=${urn}`);
    return of(BEEMSMODULES.find(BEEMSModule => BEEMSModule.urn === urn));
  }

  constructor(private messageService: MessageService) { }
}