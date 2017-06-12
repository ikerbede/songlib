// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MdIconModule, MdButtonModule, MdToolbarModule } from '@angular/material';

// Custom
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }