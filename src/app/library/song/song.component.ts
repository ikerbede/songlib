import { Component, Input, OnInit } from '@angular/core';

import { IconService } from '../../shared/icon.service';
import { Song } from '../shared/song';

@Component({
  selector: 'sl-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() song: Song;
  checked: boolean = false;

  constructor(private iconService: IconService) {
    iconService.addSvgIcons([
      'audiotrack',
      'check_box',
      'check_box_outline_blank',
      'delete',
      'description',
      'download',
      'edit',
      'favorite',
      'favorite_border'
    ]);
  }

  ngOnInit() {
  }

  makeFavorite() {
    this.song.isFavorite = !this.song.isFavorite;
  }

  checkSong() {
    this.checked = true;
    console.log('Song checked!');
  }

  uncheckSong() {
    this.checked = false;
    console.log('Song unchecked!');
  }

}
