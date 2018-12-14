import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonitorComponent } from './monitor/monitor.component';
import { OverviewComponent } from './overview/overview.component';
import { IncidentComponent } from './incident/incident.component';
import { LoggerComponent } from './logger/logger.component';


const monitorRoutes: Routes = [
  {
    path: 'monitor',
    component: MonitorComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'incident',
        component: IncidentComponent,
      },
      {
        path: 'logger',
        component: LoggerComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(monitorRoutes)
  ],
  exports: [RouterModule]
})
export class MonitorRoutingModule {}
