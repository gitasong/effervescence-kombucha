import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Effervesence Kombucha</h1>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Goddess Blend", "Eva's Herbucha", 275.00, "pomegranate");
    new Keg("Gingerade", "GT's Enlightened Synergy", 300.00, "lemon ginger");
    new Keg("Superfruit", "Acai Fusion", 300.00, "acai berry");
  ]
}
