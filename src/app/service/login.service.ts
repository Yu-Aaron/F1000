import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // http 请求 返回的数据
  parameKey;
  loginData;

  constructor(private http: HttpClient) { }

  getParamsKey(): Observable<any> {
    this.parameKey = this.http.get('/api/v2.0/users/getSecretKey')
      .pipe(
        tap());
    return this.parameKey;
  }
  getLoginData(param): Observable<any> {
    const str = [];
    for (const p in param) {
      if (param.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(param[p]));
      }
    }
    param = str.join('&');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    this.loginData = this.http.post('/api/v2.0/login', param, httpOptions);
    return this.loginData;
  }

  getImage(): Observable<any> {
    return this.http.get('/api/v2.0/users/getImage');
  }

  getLogin() {
    return this.http.get('/api/v2.0/systemsetting/configuration/item/buildVersion');
  }

  getCurrentTime () {
    return this.http.get('/api/v2.0/sysbaseinfo/curtime');
  }
}
