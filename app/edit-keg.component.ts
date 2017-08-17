import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-task',
  template: `
  <div>
      <div *ngIf="selectedKeg">
        <h3>{{selectedKeg.name}}</h3>
        <hr>
        <h3>Edit Keg</h3>
        <label>Enter New Keg Name:</label>
        <input [(ngModel)]="selectedKeg.name">
        <label>Enter New Keg Brand:</label>
        <input [(ngModel)]="selectedKeg.brand">
        <label>Enter New Keg Flavor:</label>
        <input [(ngModel)]="selectedKeg.flavor">
        <label>Enter New Keg Price:</label>
        <input [(ngModel)]="selectedKeg.price">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() selectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
