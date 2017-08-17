import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Effervesence Kombucha</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (clickSell)="sellPint($event)" (clickGrowler)="sellGrowler($event)" (clickLarge)="sellLarge($event)" [clickedKeg]="clickedKeg"></keg-list>
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

  sellPint(clickedKeg) {
    clickedKeg.pints --;
    console.log(clickedKeg.pints);
    return clickedKeg;
  }

  sellGrowler(clickedKeg) {
    clickedKeg.pints -= 2;
    console.log(clickedKeg.pints);
    return clickedKeg;
  }

  sellLarge(clickedKeg) {
    clickedKeg.pints -= 4;
    console.log(clickedKeg.pints);
    return clickedKeg;
  }
}
