import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Effervesence Kombucha</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (clickSell)="sell($event)" [clickedKeg]="clickedKeg"></keg-list>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
    <edit-keg [selectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg: null;

  masterKegList: Keg[] = [
    new Keg("Goddess Blend", "Eva's Herbucha", "pomegranate", 4.00),
    new Keg("Gingerade", "GT's Enlightened Synergy", "lemon ginger", 3.50),
    new Keg("Superfruit", "Acai Fusion", "acai berry", 4.25),
    new Keg("Tropical Ambrosia", "Kevita", "pineapple peach", 4.00),
    new Keg("Passion Explosion", "Soma", "passionfruit mango", 3.75),
  ];

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  sell(args) {
    console.log(args);
    var keg = args[0];
    var size = args[1];
    if (size === "pint") {
      keg.pints --;
      console.log(keg.pints);
      return keg;
    } else if (size === "growler") {
      keg.pints -= 2;
      console.log(keg.pints);
      return keg;
    } else if (size === "largeGrowler") {
      keg.pints -= 4;
      console.log(keg.pints);
      return keg;
    }
  }
}
