import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';

import { SharedModule } from '../model/shared/shared.module';

import { AssetComponent } from './asset/asset.component';
import { AreaComponent } from './area/area.component';
import { DeviceComponent } from './device/device.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  imports: [
    CommonModule,
    AssetRoutingModule,
    SharedModule
  ],
  declarations: [
    AssetComponent,
    AreaComponent,
    DeviceComponent,
    AddressComponent,
  ],
  exports: [
  ]
})
export class AssetModule { }
