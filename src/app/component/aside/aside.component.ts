import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  menuList = [
    { menu: '实时监测', path: '/monitor/overview' },
    { menu: '资产管理', path: '/asset/area' },
    { menu: '防护策略', path: '/strategy/security' },
    { menu: '深度检测', path: '/rule/blacklist' },
    { menu: '网络会话', path: '/session/state' },
    { menu: '运行报告', path: '/report/event' },
    { menu: '系统设置', path: '/setting/basic' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
