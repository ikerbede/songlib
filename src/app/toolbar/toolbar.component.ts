import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'sl-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'headset',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/headset.svg')
    );
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/menu.svg')
    );
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/search.svg')
    );
  }

  ngOnInit() {
  }

}
