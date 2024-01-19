import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ramais } from '../../model/ramais';

@Component({
  selector: 'app-ramais-list',
  templateUrl: './ramais-list.component.html',
  styleUrls: ['./ramais-list.component.scss']
})
export class RamaisListComponent {
  @Input() ramaisList: Ramais[] = [];
  @Output() addRamaisList = new EventEmitter<boolean>(false);
  @Output() editRamaisList = new EventEmitter<Ramais>(false);
  @Output() deletRamaisList = new EventEmitter<Ramais>(false);

  readonly displayedColumns = ['ramal', 'serialNumber', 'ipCentral', 'actions'];

  constructor() { }

  onAddRamaisList() {
    this.addRamaisList.emit(true);
  }

  onEditRamaisList(element: Ramais) {
    this.editRamaisList.emit(element);
  }

  onDeletRamaisList(element: Ramais) {
    this.deletRamaisList.emit(element);
  }
}