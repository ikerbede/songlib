import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { BehaviorSubject }    from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';

import { Song }       from './song';

const basicUrl = 'assets/data/';

@Injectable()
export class LibraryService {
  // Observable sources
  private songSource: BehaviorSubject<Song[]> = new BehaviorSubject([]);

  // Observable streams
  public readonly songObservable = this.songSource.asObservable();

  constructor(private http: Http) {
    this.getSongs().then(songs => this.songSource.next(songs));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // SONG METHODS

  public getSongs(): Promise<Song[]> {
    return this.http.get(basicUrl + 'songs.json')
      .toPromise()
      .then(response => response.json() as Song[])
      .catch(this.handleError);
  }

  public addSong(song: Song): void {
    let songs = this.songSource.getValue();
    if (songs.indexOf(song) !== -1) {
      console.error("Song already exists in song library!");
      return;
    }
    songs.push(song);
    this.songSource.next(songs);
  }

  public removeSong(song: Song): void {
    let songs = this.songSource.getValue();
    songs.splice(songs.indexOf(song), 1);
    this.songSource.next(songs);
  }

  // SELECTED SONG METHODS
/*
  public getSelectedSongs(): Song[] {
    return this.selectedSongs;
  }

  public addSelectedSong(song: Song): void {
    this.selectedSongs.push(song);
  }

  public removeSelectedSong(song: Song): void {
    this.selectedSongs.splice(this.selectedSongs.indexOf(song), 1);
  }
*/
}