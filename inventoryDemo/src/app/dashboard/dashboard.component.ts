import { Component, OnInit } from '@angular/core';

import { BEEMSModule } from '../beems-module'
import { BEEMSModuleService } from '../beems-module.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  beemsModules: BEEMSModule[] = [];

  constructor(private BEEMSModuleService: BEEMSModuleService) {}

  ngOnInit() {
    this.getBEEMSModules();
  }

  getBEEMSModules(): void {
    this.BEEMSModuleService.getBEEMSModules()
      .subscribe(beemsModules => this.beemsModules = beemsModules);
  }
}