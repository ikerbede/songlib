import { Component, OnInit } from '@angular/core';

import { IconService } from '../shared/icon.service';

@Component({
  selector: 'sl-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor(private iconService: IconService) {
    iconService.addSvgIcons([
      'account_circle',
      'favorite',
      'library_music',
      'login',
      'logout',
      'star'
    ]);
  }

  ngOnInit() {
  }

}
