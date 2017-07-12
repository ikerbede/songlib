import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

import {
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdListModule,
  MdDialogModule,
  MdInputModule
}                           from '@angular/material';

import { LibraryComponent } from './library.component';
import { SongComponent }    from './song/song.component';
import { SongAdderComponent } from './song-adder/song-adder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdDialogModule,
    MdInputModule
  ],
  declarations: [
    LibraryComponent,
    SongComponent,
    SongAdderComponent
  ],
  entryComponents: [
    SongAdderComponent
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }