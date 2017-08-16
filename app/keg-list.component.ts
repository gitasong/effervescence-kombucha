import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <h2>List of Kegs Available</h2>
  <ul>
    <li *ngFor="let currentKeg of childKegList">
      <h3>{{currentKeg.name}}</h3>
      <p><em>{{currentKeg.brand}}</em></p>
      <p>{{currentKeg.flavor}}</p>
      <h4>\${{currentKeg.price.toFixed(2)}}</h4>
    </li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
