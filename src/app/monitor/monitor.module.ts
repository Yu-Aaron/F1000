import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';

import { MonitorComponent } from './monitor/monitor.component';
import { OverviewComponent } from './overview/overview.component';
import { IncidentComponent } from './incident/incident.component';
import { LoggerComponent } from './logger/logger.component';

import { SharedModule } from '../model/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MonitorRoutingModule,
    SharedModule
  ],
  declarations: [
    MonitorComponent,
    OverviewComponent,
    IncidentComponent,
    LoggerComponent,
  ],
  exports : [
    MonitorComponent,
    OverviewComponent,
    IncidentComponent,
    LoggerComponent,
  ]
})
export class MonitorModule { }
