import { Component } from '@angular/core';
import { Ramais } from '../model/ramais';
import { RamaisService } from '../services/ramais.service';

@Component({
  selector: 'app-ramais',
  templateUrl: './ramais.component.html',
  styleUrls: ['./ramais.component.scss']
})
export class RamaisComponent {
  // dataSource: Ramais[] = [{ id: '1', ramal: '6001', serialNumber: 'lzk606895', ipCentral: '192.168.10.1' }]
  dataSource: Ramais[] = [];
  // devem ser inseridas somente as colunas que a tabela vai interar
  displayedColumns = ['ramal', 'serialNumber', 'ipCentral']

  constructor(public ramaisService: RamaisService) {
    this.ramaisService.getRamis().subscribe(ramais => this.dataSource = ramais);
  }
}
