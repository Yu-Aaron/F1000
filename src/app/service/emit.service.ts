import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService implements OnInit {
  public eventEmit: any;
  constructor() {
    // 定义发射的事件
    this.eventEmit = new EventEmitter();
  }

  ngOnInit() {

  }
}
