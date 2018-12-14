import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const settingRoutes: Routes = [
  {
    path: 'setting',
    component: SettingComponent,
    children: [
      {
        path: 'basic',
        component: BasicComponent
      },
      {
        path: 'interface',
        component: InterfaceComponent
      },
      {
        path: 'static-router',
        component: StaticRouterComponent
      },
      {
        path: 'switch',
        component: SwitchComponent
      },
      {
        path: 'anti-penetation',
        component: AntiPenetrationComponent
      },
      {
        path: 'reliable',
        component: ReliableComponent
      },
      {
        path: 'security-operation',
        component: SecurityOperationComponent
      },
      {
        path: 'usercontrol',
        component: UsercontrolComponent
      },
      {
        path: 'myaccount',
        component: MyaccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(settingRoutes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
