import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Input()
  success: boolean;
  isSuccess: boolean;
  constructor() { }

  ngOnInit() {
    this.isSuccess = this.success;
  }

}
