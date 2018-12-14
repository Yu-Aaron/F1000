import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetComponent } from './asset/asset.component';
import { AreaComponent } from './area/area.component';
import { DeviceComponent } from './device/device.component';
import { AddressComponent } from './address/address.component';

const AssetRoutes: Routes = [
  {
    path: 'asset',
    component: AssetComponent,
    children: [
      {
        path: 'area',
        component: AreaComponent,
      },
      {
        path: 'device',
        component: DeviceComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AssetRoutes)
  ],
  exports: [RouterModule]
})
export class AssetRoutingModule {}
