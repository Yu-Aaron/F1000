import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MonitorComponent } from '../monitor/monitor/monitor.component';
import { IndexComponent } from '../main/index/index.component';
import {AssetComponent} from '../asset/asset/asset.component';
import {ReportComponent} from '../report/report/report.component';
import {RuleComponent} from '../rule/rule/rule.component';


const routes: Routes = [
  // { path: 'monitor', component: MonitorComponent},
  // { path: 'monitor', loadChildren: './monitor/monitor-routing.module#MonitorRoutingModule'},

];

@NgModule({
  imports : [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [],
  exports : [RouterModule]
})
export  class MainRoutingModule {}

