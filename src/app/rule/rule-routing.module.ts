import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuleComponent } from './rule/rule.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { WhitelistComponent } from './whitelist/whitelist.component';
import { IpmacComponent } from './ipmac/ipmac.component';

const ruleRoutes: Routes = [
  {
    path: 'rule',
    component: RuleComponent,
    children: [
      {
        path: 'blacklist',
        component: BlacklistComponent
      },
      {
        path: 'whitelist',
        component: WhitelistComponent
      },
      {
        path: 'ipmac',
        component: IpmacComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ruleRoutes)],
  exports: [RouterModule]
})
export class RuleRoutingModule { }
