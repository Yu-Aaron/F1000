import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  links = [
    { 'menu' : '会话监控', 'path' : '/session/state' },
    { 'menu' : '流量监控', 'path' : '/session/flowdata' },
    { 'menu' : '协议统计', 'path' : '/session/protocol' }
  ]
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {
  }

}
