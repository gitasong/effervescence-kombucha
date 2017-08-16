import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Effervesence Kombucha</h1>
    <keg-list [childKegList]="masterKegList"></keg-list>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Goddess Blend", "Eva's Herbucha", "pomegranate", 275.00),
    new Keg("Gingerade", "GT's Enlightened Synergy", "lemon ginger", 350.00),
    new Keg("Superfruit", "Acai Fusion", "acai berry", 300.00),
  ];
}
