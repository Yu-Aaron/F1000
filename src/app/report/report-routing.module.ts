import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report/report.component';
import { EventComponent } from './event/event.component';
import { LogComponent } from './log/log.component';
import { ProtocolComponent } from './protocol/protocol.component';

const reportRoutes: Routes = [
  {
    path: 'report',
    component: ReportComponent,
    children: [
      {
        path: 'event',
        component: EventComponent
      },
      {
        path: 'log',
        component: LogComponent
      },
      {
        path: 'protocol',
        component: ProtocolComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(reportRoutes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
