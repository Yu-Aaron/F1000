import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../model/shared/shared.module';

import { RuleRoutingModule } from './rule-routing.module';

import { RuleComponent } from './rule/rule.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { WhitelistComponent } from './whitelist/whitelist.component';
import { IpmacComponent } from './ipmac/ipmac.component';

@NgModule({
  imports: [
    CommonModule,
    RuleRoutingModule,
    SharedModule
  ],
  declarations: [
    RuleComponent,
    BlacklistComponent,
    WhitelistComponent,
    IpmacComponent,
  ]
})
export class RuleModule { }
