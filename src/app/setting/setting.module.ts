import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../model/shared/shared.module';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting/setting.component';
import { BasicComponent } from './basic/basic.component';
import { InterfaceComponent } from './interface/interface.component';
import { StaticRouterComponent } from './static-router/static-router.component';
import { SwitchComponent } from './switch/switch.component';
import { AntiPenetrationComponent } from './anti-penetration/anti-penetration.component';
import { ReliableComponent } from './reliable/reliable.component';
import { SecurityOperationComponent } from './security-operation/security-operation.component';
import { UsercontrolComponent } from './usercontrol/usercontrol.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedModule
  ],
  declarations: [
    SettingComponent,
    BasicComponent,
    InterfaceComponent,
    StaticRouterComponent,
    SwitchComponent,
    AntiPenetrationComponent,
    ReliableComponent,
    SecurityOperationComponent,
    UsercontrolComponent,
    MyaccountComponent,
  ]
})
export class SettingModule { }
