import { NgModule } from '@angular/core';

import { MonitorModule } from '../monitor/monitor.module';
import { AssetModule } from '../asset/asset.module';
import { StrategyModule } from '../strategy/strategy.module';
import { RuleModule } from '../rule/rule.module';
import { SessionModule } from '../session/session.module';
import { ReportModule } from '../report/report.module';
import { SettingModule } from '../setting/setting.module';
import {  RouterModule } from '@angular/router';
import { SharedModule } from '../model/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { AsideComponent } from '../component/aside/aside.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    MonitorModule,
    AssetModule,
    StrategyModule,
    RuleModule,
    SessionModule,
    ReportModule,
    SettingModule,
    RouterModule,
    SharedModule,
    MainRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    MonitorModule,
    AssetModule,
    StrategyModule,
    RuleModule,
    SessionModule,
    ReportModule,
    SettingModule,
    RouterModule,
    MainRoutingModule,
  ],
  providers: []
})
export class MainModule {}
