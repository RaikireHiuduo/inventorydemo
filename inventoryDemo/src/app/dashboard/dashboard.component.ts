import { Component, OnInit } from '@angular/core';

import { BEEMS_Module } from '../beems_module'
import { BEEMS_ModuleService } from '../beems-module.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  BEEMS_Modules: BEEMS_Module[] = [];

  constructor(private beemsModuleService: BEEMS_ModuleService) {}

  ngOnInit() {
    this.getBEEMSModules();
  }

  getBEEMSModules(): void {
    this.beemsModuleService.getBEEMSModules()
      .subscribe(BEEMS_Modules => this.BEEMS_Modules = BEEMS_Modules);
  }
}