import { Component, OnInit } from '@angular/core';
import { EmitService } from './service/emit.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loginSuccessFlag: boolean = true;
  local: any;
  constructor(
    public emitService: EmitService,
    public location: Location,
    public router: Router
  ) {}
  ngOnInit() {
    let flag = 0;
    const nextRoute = ['monitor', 'asset', 'strategy', 'rule', 'session', 'report', 'setting'];
    // 在主页的地址栏想要到login页面时，需要在地址栏输入login,判断是否要进入login页面
    // 如果随便输入的地址，不包括login 时，且已经登录过（sessionStorage.getItem('isLogin')来判断是否登录过，如果是true，则已经登录过）
    if (window.location.href.indexOf('login') < 0 && sessionStorage.getItem('isLogin') !== 'false') {
      this.loginSuccessFlag = false;
      // 已经登录过，再次判断是否需要跳转到第一个页面
      for (let i in nextRoute) {
        if (window.location.href.indexOf(nextRoute[i]) > 0) {
          flag ++;
        }
      }
      //在主页的地址栏随便输入地址时，如果是在一级理由随便输入的则跳到第一个页面
      if (flag <= 0) {
        this.router.navigate(['/monitor/overview']);
      }
    } else {
      // 随便输入的地址，包括login 时,则进入login页面。
      sessionStorage.setItem('isLogin', 'false');
      this.loginSuccessFlag = true;
    }

    this.emitService.eventEmit.subscribe((value: boolean) => {
      this.loginSuccessFlag = !value;
    });
  }
}


