import { Component, OnInit } from '@angular/core';

import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user: User;
  public libraryMode: String;
  
  constructor() { }

  ngOnInit() {
    this.user = new User(
      'Iker Bedecarrax',
      'password',
      'assets/images/avatars/iker_bedecarrax.png'
    );
    this.libraryMode = 'songs';
  }

  public setLibraryMode(mode) {
    this.libraryMode = mode;
  }
}
