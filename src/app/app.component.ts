import { Component, OnInit } from '@angular/core';

import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;
  
  constructor() { }

  ngOnInit() {
    this.user = new User(
      "Iker Bedecarrax",
      "password",
      "assets/images/avatars/iker_bedecarrax.png"
    );
  }
}
