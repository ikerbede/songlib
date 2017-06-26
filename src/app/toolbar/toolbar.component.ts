import { Component, OnInit } from '@angular/core';

import { IconService } from '../shared/icon.service';

@Component({
  selector: 'sl-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private iconService: IconService) {
    iconService.addSvgIcons([
      'headset',
      'menu'
    ]);
  }

  ngOnInit() {
  }

}
