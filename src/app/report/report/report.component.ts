import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  links = [
    { 'menu' : '事件报告', 'path' : '/report/event' },
    { 'menu' : '日志报告', 'path' : '/report/log' },
    { 'menu' : '协议报告', 'path' : '/report/protocol' }
  ]
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {
  }

}
