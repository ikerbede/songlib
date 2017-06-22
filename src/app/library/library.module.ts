import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdIconModule,
  MdButtonModule,
  MdListModule
} from '@angular/material';

import { SongLibraryComponent } from './library.component';
import { SongComponent } from './song/song.component';


@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
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