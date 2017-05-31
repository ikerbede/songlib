import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sl-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  innerHeight: number;
  innerWidth: number;
  isToogled: boolean;

  constructor() {
    this.innerHeight = window.screen.height;
    this.innerWidth = window.screen.width;
  }

  ngOnInit() {
    this.isToogled = (innerWidth > 900);
  }

  toogle() {
    this.isToogled != this.isToogled;
  }

}
