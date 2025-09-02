
import { Component } from '@angular/core';

/**
 * A simple component declared and exported by CustomModule.
 */
@Component({
  selector: 'app-hello',
  template: `<div style="padding:1rem; border:1px solid #ccc; border-radius:8px;">
               <p>Hello from <strong>CustomModule</strong>!</p>
             </div>`
})
export class HelloComponent {}
