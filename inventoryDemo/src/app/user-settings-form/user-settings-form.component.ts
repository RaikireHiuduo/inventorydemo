import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserSettingsModel } from '../user-settings-model';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {
  //Code is based on: https://angular.io/guide/reactive-forms
  @Input() user: UserSettingsModel;

  userSettingsForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserManagementService) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  createForm() {
    // TODO: Call database for this user's information rather than empty.
    // Deep copy to user.
    // ???
    
    // Write to form
    this.userSettingsForm = this.fb.group({
      email: ['', Validators.required],
      //email: [this.userSettingsDetail.email, Validators.required],
      
      fullname: ['', Validators.required],
      position: ['', Validators.required],
      expertise: ['', Validators.required],
      department: ['', Validators.required],
      group: ['', Validators.required]
    });
  }

  onSubmit() {
    this.user = this.prepareSaveUser();
    this.userService.updateUser(this.user).subscribe(/* error handling */);
    this.rebuildForm();
  }

  prepareSaveUser(): UserSettingsModel {
    const formModel = this.userSettingsForm.value;
 
    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveUser: UserSettingsModel = {
      id: this.user.id,
      username: this.user.username,
      password: this.user.password,
      email: formModel.email as string,

      fullname: formModel.fullname as string,
      position: formModel.position as string,
      expertise: formModel.expertise as string,
      department: formModel.department as string,
      group: formModel.group as string
    };
    return saveUser;
  }
 
  revert() { 
    this.rebuildForm();
  }

  rebuildForm() {
    this.userSettingsForm.reset({
      //Currently as hard reset
      email: '',

      fullname: '',
      position: '',
      expertise: '',
      department: '',
      group: ''
      
      /*
      email: this.user.email,

      fullname: this.user.fullname,
      position: this.user.position,
      expertise: this.user.expertise,
      department: this.user.department,
      group: this.user.group
      */
    });
  }
}
