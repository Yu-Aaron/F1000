import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';

import { SharedModule } from '../model/shared/shared.module';

import { SessionComponent } from './session/session.component';
import { StateComponent } from './state/state.component';
import { FlowdataComponent } from './flowdata/flowdata.component';
import { ProtocolComponent } from './protocol/protocol.component';


@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule
  ],
  declarations: [
    SessionComponent,
    StateComponent,
    FlowdataComponent,
    ProtocolComponent,
  ]
})
export class SessionModule { }
