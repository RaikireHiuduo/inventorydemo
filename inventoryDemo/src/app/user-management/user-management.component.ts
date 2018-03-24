import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { UserSettingsModel } from '../user-settings-model';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  //Clean-up
  user: Observable<UserSettingsModel>;
  isLoading = false;

  constructor(private userManagementService: UserManagementService) { }

  ngOnInit() { 
    this.getUser();
  }

  getUser() {
    //this.isLoading = true;
    //TODO: Get id of current user.
    this.user = this.userManagementService.getUser(1)
                    //TODO: Error handling
                    //.finally(() => this.isLoading = false);
  }
}
