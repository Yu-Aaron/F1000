import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../model/shared/shared.module';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report/report.component';
import { EventComponent } from './event/event.component';
import { LogComponent } from './log/log.component';
import { ProtocolComponent } from './protocol/protocol.component';


@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule
  ],
  declarations: [
    ReportComponent,
    EventComponent,
    LogComponent,
    ProtocolComponent,
  ]
})
export class ReportModule { }
