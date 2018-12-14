import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import C from 'crypto-js';
import { EmitService } from '../service/emit.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input()
  success: boolean;
  isSuccess: boolean;
  data;
  imageData: string;
  formModel: FormGroup;
  errorMessage: string;
  errorMessageFlag: boolean;
  constructor(
    private productService: LoginService,
    private router: Router,
    private userService: UserService,
    public emitService: EmitService
  ) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      username : '',
      password : '',
      verificationCode : ''
    });
  }
  ngOnInit() {
    this.isSuccess = this.success;
    this.productService.getLogin().subscribe();
    this.productService.getCurrentTime().subscribe();
    this.getImage();
  }
  getImage() {
    this.productService.getImage().subscribe( data => {
      this.imageData = data;
    });
  }

  onLogin() {
    console.log(this.formModel.value);
    this.productService.getParamsKey().subscribe(data => {
      const key = C.enc.Base64.parse(data);  // 十六位十六进制数作为密钥
      const info = {
        username : btoa(this.baseCode(this.formModel.value.username, key)),
        password : btoa(this.baseCode(this.formModel.value.password, key)),
        verifycode : btoa(this.formModel.value.verificationCode)
      };
      this.productService.getLoginData(info).subscribe( message => {
        this.errorMessage = message.message;
        this.errorMessageFlag = message.success;
        this.isSuccess = message.success;
        if (message.success) {
          this.router.navigate(['/monitor/overview']);
          this.emitService.eventEmit.emit(this.errorMessageFlag) ;
          sessionStorage.setItem('isLogin', String(this.isSuccess));
        }
      });
    });
  }

  baseCode (data, key) {
    return C.AES.encrypt(data, key, {
      mode : C.mode.ECB,
      podding : C.pad.PKcs7
    }).toString();
  }

}
