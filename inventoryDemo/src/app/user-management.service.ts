import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { UserSettingsModel } from './user-settings-model';

@Injectable()
export class UserManagementService {
  lol: Observable<UserSettingsModel>;

  getUser(id: number): Observable<UserSettingsModel> {
    //TODO: HTTP Get given user ID
    return this.lol;
  }

  // Fake server update; assume nothing can go wrong
  updateUser(user: UserSettingsModel): Observable<UserSettingsModel>  {
    //TODO:-
    //1. HTTP POST and update to the user ID
    return this.lol;
    
    //const oldHero = heroes.find(h => h.id === hero.id);
    //const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
    //return of(newHero).delay(this.delayMs); // simulate latency with delay
  }
}