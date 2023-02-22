import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Ramais } from '../model/ramais';
import { RamaisService } from '../services/ramais.service';

@Component({
  selector: 'app-ramais',
  templateUrl: './ramais.component.html',
  styleUrls: ['./ramais.component.scss']
})
export class RamaisComponent {
  // dataSource: Ramais[] = [{ id: '1', ramal: '6001', serialNumber: 'lzk606895', ipCentral: '192.168.10.1' }]
  ramais$: Observable<Ramais[]>;
  // devem ser inseridas somente as colunas que a tabela vai interar
  displayedColumns = ['ramal', 'serialNumber', 'ipCentral', 'status', 'actions']

  constructor(public ramaisService: RamaisService, public dialog: MatDialog, private router: Router) {

    this.ramais$ = this.ramaisService.getRamis().pipe(
      catchError(error => {
        // console.log(error);
        this.openDialog('Erro ao carregar recursos.');
        return of([])
      })
    );
  }
  openDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, { data: errorMsg });
  }

  onAdd() {
    console.log('onAdd');
    this.router.navigate(['ramais/new']);
  }
}
