import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyRoutingModule } from './strategy-routing.module';

import { SharedModule } from '../model/shared/shared.module';

import { StrategyComponent } from './strategy/strategy.component';
import { SecurityComponent } from './security/security.component';
import { SessionComponent } from './session/session.component';
import { ServiceComponent } from './service/service.component';
import { ApplyComponent } from './apply/apply.component';

@NgModule({
  imports: [
    CommonModule,
    StrategyRoutingModule,
    SharedModule
  ],
  declarations: [
    StrategyComponent,
    SecurityComponent,
    SessionComponent,
    ServiceComponent,
    ApplyComponent,
  ]
})
export class StrategyModule { }
