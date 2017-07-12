import {
  Component,
  OnInit,
  Output,
  EventEmitter
}                          from '@angular/core';

import { IconService }     from '../shared/icon.service';
import { LibraryModeEnum } from 'app/library/shared/library-mode.enum';

@Component({
  selector: 'sl-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() homeEvent: EventEmitter<any>;

  constructor(private iconService: IconService) {
    iconService.addSvgIcons([
      'headset',
      'menu'
    ]);
    this.homeEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  goToHome() {
    this.homeEvent.emit(LibraryModeEnum.SONGS);
  }
}
