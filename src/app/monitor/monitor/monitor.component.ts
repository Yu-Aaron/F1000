import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  links = [
    { 'menu' : '状态统计', 'path' : '/monitor/overview' },
    { 'menu' : '安全事件', 'path' : '/monitor/incident' },
    { 'menu' : '系统日志', 'path' : '/monitor/logger' }
  ]
  activeLink = this.links[0];
  constructor() { }

  ngOnInit() {
  }

}
