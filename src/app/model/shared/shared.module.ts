import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatListModule,
  MatTabsModule
} from '@angular/material';

import {TabComponent } from '../../component/tab/tab.component';


@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatTabsModule,
    RouterModule,
  ],
  exports : [
    CommonModule,
    MatListModule,
    MatTabsModule,
    TabComponent,
    RouterModule
  ],
  declarations: [ TabComponent ]
})
export class SharedModule { }
