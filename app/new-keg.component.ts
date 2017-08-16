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
    <button>Add Keg</button>
  </div>
  `
})

export class NewKegComponent {

}
