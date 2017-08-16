import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <h2>List of Kegs Available</h2>
  <ul>
    <li *ngFor="let currentKeg of childKegList">
      <h3><strong>Name:</strong> {{currentKeg.name}}</h3>
      <p><strong>Brand:</strong> <em>{{currentKeg.brand}}</em></p>
      <p><strong>Flavor:</strong> {{currentKeg.flavor}}</p>
      <h4><strong>Price:</strong> \${{currentKeg.price.toFixed(2)}}</h4>
    </li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
