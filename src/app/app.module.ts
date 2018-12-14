import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MainRoutingModule } from './main/main-routing.module'; //根路由
import { SharedModule } from './model/shared/shared.module';    //共享模块
import { MainModule } from './main/main.module';    //项目的根模块
import { TabModule } from './component/tab/tab.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './main/index/index.component';  //登陆后根页面

import { LoginService } from './service/login.service';  //登陆接口服务
import { EmitService } from './service/emit.service';
import { RouteguardService } from './service/routeguard.service';
import { LoginModule } from './login/login.module'; //登陆模块


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxEchartsModule,
    // LoginModule,
    MainRoutingModule,
    SharedModule,
    MainModule,
    AppRoutingModule,
    TabModule
  ],
  providers: [
    LoginService,
    EmitService,
    RouteguardService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
