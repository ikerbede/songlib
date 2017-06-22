import { Injectable } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

const iconDirPath = 'assets/images/icons/';
const svgExtension = '.svg';

@Injectable()
export class IconService {
  iconRegistry: MdIconRegistry;
  sanitizer: DomSanitizer;

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    this.iconRegistry = iconRegistry;
    this.sanitizer = sanitizer;
  }

  addSvgIcons(iconNames: string[]) {
    for (let iconName of iconNames) {
      this.iconRegistry.addSvgIcon(
        iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(iconDirPath + iconName + svgExtension)
      );
    }
  }
}