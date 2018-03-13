import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BEEMSModuleService } from './beems-module.service';

import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AssetComponent } from './asset/asset.component';
import { AssetCategoriesComponent } from './asset-categories/asset-categories.component';
import { AssetLocationComponent } from './asset-location/asset-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MessagesComponent,
    AssetComponent,
    AssetCategoriesComponent,
    AssetLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    BEEMSModuleService, 
    MessageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
