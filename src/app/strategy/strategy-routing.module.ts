import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrategyComponent } from './strategy/strategy.component';
import { SecurityComponent } from './security/security.component';
import { SessionComponent } from './session/session.component';
import { ServiceComponent } from './service/service.component';
import { ApplyComponent } from './apply/apply.component';

const strategyRoutes: Routes = [
  {
    path: 'strategy',
    component: StrategyComponent,
    children: [
      {
        path: 'security',
        component: SecurityComponent
      },
      {
        path: 'session',
        component: SessionComponent
      },
      {
        path: 'service',
        component: ServiceComponent
      },
      {
        path: 'apply',
        component: ApplyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(strategyRoutes)],
  exports: [RouterModule]
})
export class StrategyRoutingModule { }
