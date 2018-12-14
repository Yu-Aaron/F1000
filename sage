warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/app.component.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/app.component.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/app.module.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/login/login.component.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/login/login.component.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/shared/login.service.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/shared/shared.module.ts.
The file will have its original line endings in your working directory.
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex db9472f..1baaa4f 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -358,6 +358,14 @@[m
       "integrity": "sha512-nN29Ovomg21eL8acwOSUFAYwWFI1TuFwUgUu37ZssfVQrYdaV+BFx3yv3P0nKU90h3Hp+oIkWHd8U34UYrvBCg==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "@angular/material": {[m
[32m+[m[32m      "version": "7.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@angular/material/-/material-7.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-wjYAWsdWpb8/BgoIfoUomnycoljU00avJ3hRIgPNnEpZhB7zqiBA8tCitzDS4NK8dKBJjM9WRAOj6yl6x3+9wA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "tslib": "^1.7.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "@angular/platform-browser": {[m
       "version": "6.1.10",[m
       "resolved": "https://registry.npmjs.org/@angular/platform-browser/-/platform-browser-6.1.10.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex ed34000..98b3ba7 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -18,6 +18,7 @@[m
     "@angular/core": "^6.1.0",[m
     "@angular/forms": "^6.1.0",[m
     "@angular/http": "^6.1.0",[m
[32m+[m[32m    "@angular/material": "^7.1.1",[m
     "@angular/platform-browser": "^6.1.0",[m
     "@angular/platform-browser-dynamic": "^6.1.0",[m
     "@angular/router": "^6.1.0",[m
[1mdiff --git a/src/app/app-routing.module.ts b/src/app/app-routing.module.ts[m
[1mindex e69de29..9812886 100644[m
[1m--- a/src/app/app-routing.module.ts[m
[1m+++ b/src/app/app-routing.module.ts[m
[36m@@ -0,0 +1,13 @@[m
[32m+[m[32mimport { NgModule } from '@angular/core';[m
[32m+[m[32mimport { RouterModule, Routes } from '@angular/router';[m
[32m+[m[32mimport { AppComponent } from './app.component';[m
[32m+[m
[32m+[m[32mconst  routes: Routes = [[m
[32m+[m[32m  { path: '', redirectTo : '/login' , pathMatch : 'full'}[m
[32m+[m[32m];[m
[32m+[m
[32m+[m[32m@NgModule({[m
[32m+[m[32m  imports : [RouterModule.forRoot(routes)],[m
[32m+[m[32m  exports : [RouterModule][m
[32m+[m[32m})[m
[32m+[m[32mexport  class AppRoutingModule {}[m
[1mdiff --git a/src/app/app.component.html b/src/app/app.component.html[m
[1mindex c6b9fe8..6969378 100644[m
[1m--- a/src/app/app.component.html[m
[1m+++ b/src/app/app.component.html[m
[36m@@ -1,3 +1,3 @@[m
[31m-<app-login></app-login>[m
[31m-[m
[31m-[m
[32m+[m[32m<div>[m
[32m+[m[32m  <router-outlet></router-outlet>[m
[32m+[m[32m</div>[m
[1mdiff --git a/src/app/app.component.ts b/src/app/app.component.ts[m
[1mindex b5c04c1..add4f20 100644[m
[1m--- a/src/app/app.component.ts[m
[1m+++ b/src/app/app.component.ts[m
[36m@@ -4,9 +4,9 @@[m [mimport {Component, OnInit} from '@angular/core';[m
   templateUrl: './app.component.html',[m
   styleUrls: ['./app.component.css'][m
 })[m
[31m-export class AppComponent implements OnInit{[m
[31m-  constructor(){}[m
[31m-  ngOnInit(){}[m
[32m+[m[32mexport class AppComponent implements OnInit {[m
[32m+[m[32m  constructor() { }[m
[32m+[m[32m  ngOnInit() { }[m
 }[m
 [m
 [m
[1mdiff --git a/src/app/app.module.ts b/src/app/app.module.ts[m
[1mindex 3ae96bb..c7e2482 100644[m
[1m--- a/src/app/app.module.ts[m
[1m+++ b/src/app/app.module.ts[m
[36m@@ -1,31 +1,32 @@[m
 import { BrowserModule } from '@angular/platform-browser';[m
 import { NgModule } from '@angular/core';[m
[31m-import {HttpClientModule} from "@angular/common/http";[m
[32m+[m[32mimport { HttpClientModule } from '@angular/common/http';[m
 import { AppComponent } from './app.component';[m
[31m-import {RouterModule, Routes} from "@angular/router";[m
[31m-import {ProductService} from "./shared/product.service";[m
[31m-import {FormsModule, ReactiveFormsModule} from "@angular/forms";[m
[31m-import {HashLocationStrategy, LocationStrategy} from "@angular/common";[m
[31m-import { LoginComponent } from './login/login.component';[m
[31m-[m
[31m-// const routeConfig: Routes = [[m
[31m-//   {path: '', component: HomeComponent},[m
[31m-//   {path: 'product/:productId', component: ProductDetailComponent}[m
[31m-// ][m
[32m+[m[32mimport { LoginService } from './shared/login.service';[m
[32m+[m[32mimport { FormsModule, ReactiveFormsModule } from '@angular/forms';[m
[32m+[m[32mimport { HashLocationStrategy, LocationStrategy } from '@angular/common';[m
[32m+[m[32mimport { AppRoutingModule } from './app-routing.module';[m
[32m+[m[32mimport { LoginModule } from './login/login.module';[m
[32m+[m[32mimport { SharedModule } from './shared/shared.module';[m
[32m+[m[32mimport { IndexComponent } from './main/index/index.component';[m
[32m+[m[32mimport { MainRoutingModule } from './main/main-routing.module';[m
 [m
 @NgModule({[m
   declarations: [[m
     AppComponent,[m
[31m-    LoginComponent[m
[32m+[m[32m    IndexComponent[m
   ],[m
   imports: [[m
     BrowserModule,[m
     FormsModule,[m
[31m-    // RouterModule.forRoot(routeConfig),[m
     ReactiveFormsModule,[m
[31m-    HttpClientModule[m
[32m+[m[32m    AppRoutingModule,[m
[32m+[m[32m    HttpClientModule,[m
[32m+[m[32m    SharedModule,[m
[32m+[m[32m    LoginModule,[m
[32m+[m[32m    MainRoutingModule[m
   ],[m
[31m-  providers: [ProductService,[m
[32m+[m[32m  providers: [LoginService,[m
     {provide: LocationStrategy, useClass: HashLocationStrategy}],[m
   bootstrap: [AppComponent][m
 })[m
[1mdiff --git a/src/app/login/login-routing.module.ts b/src/app/login/login-routing.module.ts[m
[1mindex 35c8b6c..30845ae 100644[m
[1m--- a/src/app/login/login-routing.module.ts[m
[1m+++ b/src/app/login/login-routing.module.ts[m
[36m@@ -1,6 +1,6 @@[m
 import { NgModule } from '@angular/core';[m
 import { RouterModule, Routes } from '@angular/router';[m
[31m-import { LoginComponent } from './login/login.component';[m
[32m+[m[32mimport { LoginComponent } from './login.component';[m
 [m
 const  routes: Routes = [[m
   { path: 'login', component: LoginComponent}[m
[1mdiff --git a/src/app/login/login.component.html b/src/app/login/login.component.html[m
[1mindex 993f381..9003905 100644[m
[1m--- a/src/app/login/login.component.html[m
[1m+++ b/src/app/login/login.component.html[m
[36m@@ -6,7 +6,7 @@[m
     </div>[m
     <div class="form-group">[m
       <label for="password">密码</label>[m
[31m-      <input type="text" id="password" placeholder="密码" class="form-control" formControlName="word">[m
[32m+[m[32m      <input type="password" id="password" placeholder="密码" class="form-control" formControlName="word">[m
     </div>[m
     <div class="col-md-12" style="padding: 0px;">[m
       <div class="form-group col-md-6" style="padding: 0px;">[m
[1mdiff --git a/src/app/login/login.component.ts b/src/app/login/login.component.ts[m
[1mindex 580fb42..1388f33 100644[m
[1m--- a/src/app/login/login.component.ts[m
[1m+++ b/src/app/login/login.component.ts[m
[36m@@ -1,7 +1,9 @@[m
 import { Component, OnInit } from '@angular/core';[m
[31m-import {FormBuilder, FormGroup} from "@angular/forms";[m
[31m-import {ProductService} from "../shared/product.service";[m
[32m+[m[32mimport { FormBuilder, FormGroup } from '@angular/forms';[m
[32m+[m[32mimport { LoginService } from '../shared/login.service';[m
[32m+[m[32mimport { Router } from '@angular/router';[m
 import C from 'crypto-js';[m
[32m+[m[32mimport {observable} from 'rxjs';[m
 [m
 @Component({[m
   selector: 'app-login',[m
[36m@@ -13,42 +15,39 @@[m [mexport class LoginComponent implements OnInit {[m
   data;[m
   imageData: string;[m
   formModel: FormGroup;[m
[31m-  constructor(private productService: ProductService,) {[m
[31m-    let fb = new FormBuilder();[m
[32m+[m[32m  constructor(private productService: LoginService, private router: Router) {[m
[32m+[m[32m    const fb = new FormBuilder();[m
     this.formModel = fb.group({[m
       name : '',[m
       word : '',[m
       code : ''[m
[31m-    })[m
[32m+[m[32m    });[m
 [m
   }[m
   ngOnInit() {[m
[31m-    this.productService.getLogin().subscribe((data => function (data) {[m
[31m-      console.log(data.data);[m
[31m-    }))[m
[32m+[m[32m    this.productService.getLogin().subscribe();[m
     this.getImage();[m
   }[m
[31m-  getImage(){[m
[32m+[m[32m  getImage() {[m
     this.productService.getImage().subscribe( data => {[m
       this.imageData = data;[m
[31m-    })[m
[32m+[m[32m    });[m
   }[m
 [m
   onLogin() {[m
     console.log(this.formModel.value);[m
     this.productService.getParamsKey().subscribe(data => {[m
[31m-      const key = C.enc.Base64.parse(data);  //十六位十六进制数作为密钥[m
[31m-      let info = {[m
[32m+[m[32m      const key = C.enc.Base64.parse(data);  // 十六位十六进制数作为密钥[m
[32m+[m[32m      const info = {[m
         username : btoa(this.baseCode(this.formModel.value.name, key)),[m
         password : btoa(this.baseCode(this.formModel.value.word, key)),[m
         verifycode : btoa(this.formModel.value.code)[m
       };[m
[31m-      this.productService.getLoginData(info).subscribe([m
[31m-        data => {[m
[31m-          console.log(data);[m
[31m-        }[m
[31m-      );[m
[31m-    })[m
[32m+[m[32m      this.productService.getLoginData(info).subscribe( message => {[m
[32m+[m[32m        this.router.navigate(['/index']);[m
[32m+[m[32m        console.log(message);[m
[32m+[m[32m      });[m
[32m+[m[32m    });[m
   }[m
 [m
   baseCode (data, key) {[m
[1mdiff --git a/src/app/login/login.module.ts b/src/app/login/login.module.ts[m
[1mindex e69de29..b7d0c5d 100644[m
[1m--- a/src/app/login/login.module.ts[m
[1m+++ b/src/app/login/login.module.ts[m
[36m@@ -0,0 +1,16 @@[m
[32m+[m[32mimport { NgModule } from '@angular/core';[m
[32m+[m[32mimport { SharedModule } from '../shared/shared.module';[m
[32m+[m[32mimport { LoginRoutingModule } from './login-routing.module';[m
[32m+[m[32mimport { LoginComponent } from './login.component';[m
[32m+[m[32mimport { FormsModule, ReactiveFormsModule } from '@angular/forms';[m
[32m+[m
[32m+[m[32m@NgModule({[m
[32m+[m[32m  imports: [[m
[32m+[m[32m    SharedModule,[m
[32m+[m[32m    LoginRoutingModule,[m
[32m+[m[32m    FormsModule,[m
[32m+[m[32m    ReactiveFormsModule[m
[32m+[m[32m  ],[m
[32m+[m[32m  declarations: [LoginComponent][m
[32m+[m[32m})[m
[32m+[m[32mexport class LoginModule { }[m
[1mdiff --git a/src/app/main/main-routing.module.ts b/src/app/main/main-routing.module.ts[m
[1mindex e69de29..08ad18b 100644[m
[1m--- a/src/app/main/main-routing.module.ts[m
[1m+++ b/src/app/main/main-routing.module.ts[m
[36m@@ -0,0 +1,19 @@[m
[32m+[m[32mimport { NgModule } from '@angular/core';[m
[32m+[m[32mimport { CommonModule } from '@angular/common';[m
[32m+[m[32mimport { RouterModule, Routes } from '@angular/router';[m
[32m+[m[32mimport { IndexComponent } from './index/index.component';[m
[32m+[m
[32m+[m[32mconst  routes: Routes = [[m
[32m+[m[32m  { path: 'index', component: IndexComponent}[m
[32m+[m[32m];[m
[32m+[m
[32m+[m[32m@NgModule({[m
[32m+[m[32m  imports : [[m
[32m+[m[32m    RouterModule.forChild(routes),[m
[32m+[m[32m    CommonModule[m
[32m+[m[32m  ],[m
[32m+[m[32m  declarations: [],[m
[32m+[m[32m  exports : [RouterModule][m
[32m+[m[32m})[m
[32m+[m[32mexport  class MainRoutingModule {}[m
[32m+[m
[1mdiff --git a/src/app/shared/login.service.ts b/src/app/shared/login.service.ts[m
[1mindex 8ff4b66..8bcbb52 100644[m
[1m--- a/src/app/shared/login.service.ts[m
[1m+++ b/src/app/shared/login.service.ts[m
[36m@@ -1,13 +1,13 @@[m
[31m-import {EventEmitter, Injectable} from '@angular/core';[m
[31m-import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";[m
[31m-import {Observable, of} from "rxjs";[m
[31m-import {tap} from "rxjs/operators";[m
[32m+[m[32mimport { EventEmitter, Injectable } from '@angular/core';[m
[32m+[m[32mimport { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';[m
[32m+[m[32mimport { Observable, of } from 'rxjs';[m
[32m+[m[32mimport { tap } from 'rxjs/operators';[m
 [m
 @Injectable({[m
   providedIn: 'root'[m
 })[m
[31m-export class ProductService {[m
[31m-  //http 请求 返回的数据[m
[32m+[m[32mexport class LoginService {[m
[32m+[m[32m  // http 请求 返回的数据[m
   parameKey;[m
   loginData;[m
 [m
[36m@@ -19,22 +19,20 @@[m [mexport class ProductService {[m
         tap());[m
     return this.parameKey;[m
   }[m
[31m-  getLoginData(param): Observable<any>{[m
[31m-    let str = [];[m
[31m-    for (let p in param) {[m
[32m+[m[32m  getLoginData(param): Observable<any> {[m
[32m+[m[32m    const str = [];[m
[32m+[m[32m    for (const p in param) {[m
       if (param.hasOwnProperty(p)) {[m
[31m-        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(param[p]));[m
[32m+[m[32m        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(param[p]));[m
       }[m
     }[m
[31m-    param = str.join("&");[m
[32m+[m[32m    param = str.join('&');[m
     const httpOptions = {[m
       headers: new HttpHeaders({[m
         'Content-Type':  'application/x-www-form-urlencoded'[m
       })[m
     };[m
[31m-    this.loginData = this.http.post('/api/v2.0/login', param, httpOptions)[m
[31m-      .pipe([m
[31m-        tap());[m
[32m+[m[32m    this.loginData = this.http.post('/api/v2.0/login', param, httpOptions);[m
     return this.loginData;[m
   }[m
 [m
[1mdiff --git a/src/app/shared/shared.module.ts b/src/app/shared/shared.module.ts[m
[1mindex b2e1ea1..d17742e 100644[m
[1m--- a/src/app/shared/shared.module.ts[m
[1m+++ b/src/app/shared/shared.module.ts[m
[36m@@ -1,33 +1,13 @@[m
 import { NgModule } from '@angular/core';[m
 import { CommonModule } from '@angular/common';[m
[31m-import {[m
[31m-  MatToolbarModule,[m
[31m-  MatIconModule,[m
[31m-  MatButtonModule,[m
[31m-  MatCardModule,[m
[31m-  MatInputModule,[m
[31m-  MatListModule[m
[31m-} from '@angular/material';[m
 [m
 [m
 @NgModule({[m
   imports: [[m
[31m-    CommonModule,[m
[31m-    MatToolbarModule,[m
[31m-    MatIconModule,[m
[31m-    MatButtonModule,[m
[31m-    MatCardModule,[m
[31m-    MatInputModule,[m
[31m-    MatListModule[m
[32m+[m[32m    CommonModule[m
   ],[m
   exports : [[m
[31m-    CommonModule,[m
[31m-    MatToolbarModule,[m
[31m-    MatIconModule,[m
[31m-    MatButtonModule,[m
[31m-    MatCardModule,[m
[31m-    MatInputModule,[m
[31m-    MatListModule[m
[32m+[m[32m    CommonModule[m
   ],[m
   declarations: [][m
 })[m
