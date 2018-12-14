import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  links = [
    { 'menu' : '安全域', 'path' : '/asset/area' },
    { 'menu' : '设备', 'path' : '/asset/device' },
    { 'menu' : '地址池', 'path' : '/asset/address' }
  ]
  activeLink = this.links[0];
  constructor() { }

  ngOnInit() {
  }

}
