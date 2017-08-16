import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-task',
  template: `
  <h2>Add New Keg</h2>
  <div>
    <label>Name: </label>
    <input #newName>
    <label>Name: </label>
    <input #newBrand>
    <label>Name: </label>
    <input #newFlavor>
    <label>Name: </label>
    <input #newPrice>
    <button>Add Keg</button>
  </div>
  `
})

export class NewKegComponent {

}
