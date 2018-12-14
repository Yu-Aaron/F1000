import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionComponent } from './session/session.component';
import { StateComponent } from './state/state.component';
import { FlowdataComponent } from './flowdata/flowdata.component';
import { ProtocolComponent } from './protocol/protocol.component';

const sessionRoutes: Routes = [
  {
    path: 'session',
    component: SessionComponent,
    children: [
      {
        path: 'state',
        component: StateComponent
      },
      {
        path: 'flowdata',
        component: FlowdataComponent
      },
      {
        path: 'protocol',
        component: ProtocolComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(sessionRoutes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
