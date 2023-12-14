import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ramais } from '../../model/ramais';

@Component({
  selector: 'app-ramais-list',
  templateUrl: './ramais-list.component.html',
  styleUrls: ['./ramais-list.component.scss']
})
export class RamaisListComponent {
  @Input() ramaisList: Ramais[] = [];
  @Output() addRamaisList = new EventEmitter(false);
  @Output() editRamaisList = new EventEmitter<Ramais>(false);
  @Output() deletRamaisList = new EventEmitter(false);

  readonly displayedColumns = ['ramal', 'passWord', 'serialNumber', 'ipCentral', 'status', 'actions'];

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