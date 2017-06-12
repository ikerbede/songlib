import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'sl-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class SongLibraryComponent implements OnInit {

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'audiotrack',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/audiotrack.svg')
    );
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/delete.svg')
    );
    iconRegistry.addSvgIcon(
      'download',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/download.svg')
    );
    iconRegistry.addSvgIcon(
      'favorite-border',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/favorite_border.svg')
    );
    iconRegistry.addSvgIcon(
      'lyrics',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/description.svg')
    );
    iconRegistry.addSvgIcon(
      'play',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/play_arrow.svg')
    );
  }

  ngOnInit() {
  }

}
