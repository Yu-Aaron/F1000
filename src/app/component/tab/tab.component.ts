import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  links;
  active: string;
  @Input()
  data: any;
  @Input()
  link: string ;
  constructor() { }

  ngOnInit() {
    this.links = this.data;
    this.active = this.link;
  }

}
