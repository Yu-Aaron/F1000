import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {

  links = [
    { 'menu' : '漏洞防御', 'path' : '/rule/blacklist' },
    { 'menu' : '黑白名单', 'path' : '/rule/whitelist' },
    { 'menu' : 'IP/MAC', 'path' : '/rule/ipmac' }
  ]
  activeLink = this.links[0];
  constructor() { }

  ngOnInit() {
  }

}
