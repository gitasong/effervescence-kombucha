import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h2>Add New Keg</h2>
  <div>
    <label>Name: </label>
    <input #newName>
    <label>Brand: </label>
    <input #newBrand>
    <label>Flavor: </label>
    <input #newFlavor>
    <label>Price: </label>
    <input #newPrice>
    <button (click)="submitForm(newName.value, newBrand.value, newFlavor.value, newPrice.value); newName.value=''; newBrand.value=''; newFlavor.value=''; newPrice.value='';">Add Keg</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, flavor: string, price: string) {
    var newKegToAdd: Keg = new Keg(name, brand, flavor, parseInt(price));
    this.newKegSender.emit(newKegToAdd);
  }
}
