// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule } from '@angular/material';
import 'hammerjs';

// Custom
import { ToolbarModule } from './toolbar/toolbar.module';
import { DrawerModule } from './drawer/drawer.module';
import { SongLibraryModule } from './library/library.module';

// Shared
import { IconService } from './shared/icon.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    ToolbarModule,
    DrawerModule,
    SongLibraryModule
  ],
  providers: [IconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
