import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { BEEMS_Module } from './beems_module';
import { BEEMS_MODULES } from './beems_module_list';
import { MessageService } from './message.service';

@Injectable()
export class BEEMS_ModuleService {
  
  getBEEMSModules(): Observable<BEEMS_Module[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('BEEMS_ModuleService: fetched all modules');
    return of(BEEMS_MODULES);
  }

  getBEEMSModule(id: number): Observable<BEEMS_Module> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`BEEMS_ModuleService: fetched module id=${id}`);
    return of(BEEMS_MODULES.find(BEEMS_Module => BEEMS_Module.id === id));
  }

  constructor(private messageService: MessageService) { }
}