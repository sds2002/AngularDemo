
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';

/**
 * CustomModule — a simple custom module that declares and exports HelloComponent.
 */
@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule],
  exports: [HelloComponent]
})
export class CustomModule {}
