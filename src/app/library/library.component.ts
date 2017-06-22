import { Component, OnInit } from '@angular/core';

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

  constructor(private libraryService: LibraryService) {};

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    return this.libraryService.getSongs().then(songs => this.songs = songs);
  }

}
