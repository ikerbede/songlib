// Angular
import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';

// Material
import {
  MdIconModule,
  MdButtonModule,
  MdToolbarModule,
  MdListModule
}                          from '@angular/material';

// Custom
import { DrawerComponent } from './drawer.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    MdListModule
  ],
  declarations: [DrawerComponent],
  exports: [DrawerComponent]
})
export class DrawerModule { }