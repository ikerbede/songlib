import { Component, OnInit } from '@angular/core';

import { IconService } from '../shared/icon.service';

import { Song } from './shared/song';
import { LibraryService } from './shared/library.service';

@Component({
  selector: 'sl-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  providers: [LibraryService]
})
export class SongLibraryComponent implements OnInit {
  songs: Song[];
  selectedSongs: Song[];

  constructor(private libraryService: LibraryService, private iconService: IconService) {
    iconService.addSvgIcons([
      'search'
    ]);
  };

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    return this.libraryService.getSongs().then(songs => this.songs = songs);
  }

}
