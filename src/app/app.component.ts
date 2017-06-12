import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add-circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/add_circle.svg')
    );
    iconRegistry.addSvgIcon(
      'audiotrack',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/audiotrack.svg')
    );
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/delete.svg')
    );
    iconRegistry.addSvgIcon(
      'library-music',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/library_music.svg')
    );
  }
}
