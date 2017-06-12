import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'sl-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'account-circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/account_circle.svg')
    );
    iconRegistry.addSvgIcon(
      'favorite',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/favorite.svg')
    );
    iconRegistry.addSvgIcon(
      'library-music',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/library_music.svg')
    );
    iconRegistry.addSvgIcon(
      'login',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/login.svg')
    );
    iconRegistry.addSvgIcon(
      'logout',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/logout.svg')
    );
    iconRegistry.addSvgIcon(
      'star',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/star.svg')
    );
  }

  ngOnInit() {
  }

}
