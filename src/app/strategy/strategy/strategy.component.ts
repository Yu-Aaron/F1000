import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {

  links = [
    { 'menu' : '域间策略', 'path' : '/strategy/security' },
    { 'menu' : '会话控制', 'path' : '/strategy/session' },
    { 'menu' : '服务管理', 'path' : '/strategy/service' },
    { 'menu' : '应用管理', 'path' : '/strategy/apply' }
  ]
  activeLink = this.links[0];
  constructor() { }

  ngOnInit() {
  }

}
