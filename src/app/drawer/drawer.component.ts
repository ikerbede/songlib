import { Component, Input, OnInit } from '@angular/core';

import { IconService } from '../shared/icon.service';
import { User } from '../user/user';

@Component({
  selector: 'sl-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @Input() user: User;

  constructor(private iconService: IconService) {
    iconService.addSvgIcons([
      'account_circle',
      'exit_to_app',
      'favorite',
      'library_music',
      'star'
    ]);
  }

  ngOnInit() {}

  logOut() {
    console.log('User logged out!')
  }

}
