import { Component, OnInit } from '@angular/core';

import { UserSettingsModel } from '../user-settings-model';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  //selectedUser: UserSettingsModel;
  currentID = 11;

  users: UserSettingsModel[];

  constructor(private userManagementService: UserManagementService) { }

  ngOnInit() { 
    //Figure out how to take the currently logged ID.
    this.getUser(this.currentID);
  }

  getUser(id: number): void {
    this.userManagementService.getUsers().subscribe(users => this.users = users);
    //this.userManagementService.getUser(id).subscribe(user => this.selectedUser = user);
  }
}
