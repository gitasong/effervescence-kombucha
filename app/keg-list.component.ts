import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <h2>List of Kegs Available</h2>
  <label>Filter By: </label>
  <select (change)="onChange($event.target.value)">
    <option value="allKegs">All Kegs</option>
    <option value="lowKegs">Kegs < 10 pints</option>
    <option value="fullKegs" selected="selected">Kegs >= 10 pints</option>
  </select>

  <ul>
    <li *ngFor="let currentKeg of childKegList | fullness:filterByFullness">
      <h3><strong>Name:</strong> {{currentKeg.name}}</h3>
      <p><strong>Brand:</strong> <em>{{currentKeg.brand}}</em></p>
      <p><strong>Flavor:</strong> {{currentKeg.flavor}}</p>
      <p><strong>Pints Remaining:</strong> {{currentKeg.pints}}</p>
      <h4><strong>Price:</strong> \${{currentKeg.price.toFixed(2)}}</h4>
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      <button (click)="sellButtonHasBeenClicked(currentKeg)">Sell Pint!</button>
    </li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Input() clickedKeg: Keg;
  @Output() clickSender = new EventEmitter();
  @Output() clickSell = new EventEmitter();

  filterByFullness: string = "fullKegs";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellButtonHasBeenClicked(kegToSell: Keg) {
    this.clickSell.emit(kegToSell);
  }
}
