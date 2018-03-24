import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BEEMSModuleService } from './beems-module.service';

import { UserManagementService } from './user-management.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AssetComponent } from './asset/asset.component';
import { AssetCategoriesComponent } from './asset-categories/asset-categories.component';
import { AssetLocationComponent } from './asset-location/asset-location.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MessagesComponent,
    AssetComponent,
    AssetCategoriesComponent,
    AssetLocationComponent,
    UserManagementComponent,
    UserSettingsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    BEEMSModuleService, 
    MessageService,
    UserManagementService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
