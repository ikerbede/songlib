import { 
  Component,
  OnInit,
  Input
}                             from '@angular/core';
import { MdDialog }           from '@angular/material';

import { IconService }        from 'app/shared/icon.service';

import { Song }               from 'app/library/shared/song';
import { LibraryService }     from 'app/library/shared/library.service';
import { LibraryModeEnum }    from 'app/library/shared/library-mode.enum';
import { SongAdderComponent } from 'app/library/song-adder/song-adder.component';

@Component({
  selector: 'sl-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  providers: [MdDialog, LibraryService]
})
export class LibraryComponent implements OnInit {
  private mode = LibraryModeEnum.SONGS;
  private songs: Song[];
  private filteredSongs: Song[];

  constructor(
    private libraryService: LibraryService,
    private iconService: IconService,
    private dialog: MdDialog
  ) {
    iconService.addSvgIcons([
      'add',
      'search'
    ]);
  };

  ngOnInit() {
    this.libraryService.songObservable
      .subscribe(songs => {
        this.songs = songs;
        this.filteredSongs = songs
      });
  }

  @Input()
  set libraryMode(mode: number) {
    this.mode = mode;
    switch(mode) {
      case LibraryModeEnum.FAVORITES: 
        this.filterFavorites();
        break;
      case LibraryModeEnum.HITS:
        this.filterHits();
        break;
      default:
        this.filteredSongs = this.songs;
    }
  }

  public filterSearch(input): void {
    this.filteredSongs = this.songs.filter(song =>
      song.title.toLowerCase().indexOf(input.toLowerCase()) !== -1 
      || (song.author && song.author.toLowerCase().indexOf(input.toLowerCase()) !== -1));
  }

  public filterFavorites(): void {
    this.filteredSongs = this.songs.filter(song => song.isFavorite);
  }

  public filterHits(): void {
    this.filteredSongs = this.songs.sort((current, next) => next.listenings - current.listenings);
  }

  public displaySongAdder() {
    let dialogRef = this.dialog.open(SongAdderComponent);
    dialogRef.afterClosed().subscribe(songData => {
      let newSong = new Song(songData[0], songData[1], songData[2], songData[3]);
      this.libraryService.addSong(newSong);
    });
  }

}
