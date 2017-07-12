import { Component, OnInit } from '@angular/core';
import { MdDialogRef }       from '@angular/material';

@Component({
  selector: 'sl-song-adder',
  templateUrl: './song-adder.component.html',
  styleUrls: ['./song-adder.component.scss']
})
export class SongAdderComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<SongAdderComponent>) { }

  ngOnInit() {
  }

}
