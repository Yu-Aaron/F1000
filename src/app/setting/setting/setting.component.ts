import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  links = [
    { 'menu' : '常规设置', 'path' : '/setting/basic' },
    { 'menu' : '接口', 'path' : '/setting/interface' },
    { 'menu' : '路由', 'path' : '/setting/static-router' },
    { 'menu' : '统计开关', 'path' : '/setting/switch' },
    { 'menu' : '渗透防御', 'path' : '/setting/anti-penetation' },
    { 'menu' : '可靠性', 'path' : '/setting/reliable' },
    { 'menu' : '升级备份', 'path' : '/setting/security-operation' },
    { 'menu' : '用户', 'path' : '/setting/usercontrol' },
    { 'menu' : '管理我', 'path' : '/setting/myaccount' },
  ]
  activeLink = this.links[0];
  
  constructor() { }

  ngOnInit() {
  }

}
