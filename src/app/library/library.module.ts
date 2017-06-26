import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import {
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdListModule
} from '@angular/material';

import { SongLibraryComponent } from './library.component';
import { SongComponent } from './song/song.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdListModule
  ],
  declarations: [
    SongLibraryComponent,
    SongComponent
  ],
  exports: [
    SongLibraryComponent
  ]
})
export class SongLibraryModule { }