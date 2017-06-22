import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Song } from './song';

const basicUrl = 'assets/data/';

@Injectable()
export class LibraryService {
  songs: Song[];
  selectedSongs: Song[];

  constructor(private http: Http) { }

  getSongs(): Promise<Song[]> {
    return this.http.get(basicUrl + 'songs.json')
      .toPromise()
      .then(response => response.json() as Song[])
      .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  addSelectedSong(song: Song): void {
    this.selectedSongs.push(song);
  }

  removeSelectedSong(song: Song): void {
    this.selectedSongs.splice(this.selectedSongs.indexOf(song), 1);
  }
  
}