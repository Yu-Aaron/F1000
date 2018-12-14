import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import * as myGlobals from '../model/user/user.model';
import { UserService } from '../service/user.service';
import { EmitService } from '../service/emit.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
    public emitService: EmitService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 当前路由名称
    // this.emitService.eventEmit.subscribe((value: any) => {
    //     //   console.log(value);
    //     // });
    const path = route.routeConfig.path;
    // nextRoute: 设置需要路由守卫的路由集合
    const nextRoute = ['monitor', 'asset', 'strategy', 'rule', 'session', 'report', 'setting'];
    const isLogin = myGlobals.userModel.isLogin; // 是否登录
    const isLoginA = this.userService.userModel.isLogin;
    // if (nextRoute.indexOf(path) >= 0 ) {
    //   if (!isLogin) {
    //     this.router.navigate(['login']);
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
    // if (path === 'login') {
    //   if (!isLogin) {
    //     return true;
    //   } else {
    //     this.router.navigate(['index']);
    //     return false;
    //   }
    // }
    if (path === 'login') {
      // this.router.navigate(['login']);
      this.emitService.eventEmit.emit(true) ;
      return true;
    } else {
      return true;
    }
  }
}
