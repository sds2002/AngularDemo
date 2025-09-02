
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';

/**
 * Root AppModule imports our single custom module: CustomModule.
 */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CustomModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
