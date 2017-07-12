import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
}                      from '@angular/core';

import { IconService } from 'app/shared/icon.service';
import { User }        from 'app/user/user';
import { LibraryModeEnum } from 'app/library/shared/library-mode.enum';

@Component({
  selector: 'sl-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @Input() user: User;
  @Output() libraryModeEvent: EventEmitter<any>;

  constructor(private iconService: IconService) {
    iconService.addSvgIcons([
      'account_circle',
      'exit_to_app',
      'favorite',
      'library_music',
      'star'
    ]);
    this.libraryModeEvent = new EventEmitter();
  }

  ngOnInit() {}

  public displayHits() {
    this.libraryModeEvent.emit(LibraryModeEnum.HITS);
  }

  public displayFavorites() {
    this.libraryModeEvent.emit(LibraryModeEnum.FAVORITES);
  }

  public logOut() {
    console.log('User logged out!')
  }

}
