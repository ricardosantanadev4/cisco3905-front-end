import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Ramais } from '../../model/ramais';
import { RamaisService } from '../../services/ramais.service';

@Component({
  selector: 'app-ramais',
  templateUrl: './ramais.component.html',
  styleUrls: ['./ramais.component.scss']
})
export class RamaisComponent {
  search$: Observable<Ramais[]> | null = null;
  ramais$: Observable<Ramais[]> | null = null;

  constructor(public ramaisService: RamaisService, public dialog: MatDialog
    , private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) {

    this.refreshRamais('');
  }

  refreshRamais(event: any) {
    if (event == true) {
      this.ramais$ = this.ramaisService.list('').pipe(
        catchError(() => {
          this.openDialog('Erro ao carregar recursos.');
          return of([])
        })
      );
    } else {
      this.ramais$ = this.ramaisService.list(event).pipe(
        catchError(() => {
          this.openDialog('Erro ao carregar recursos.');
          return of([])
        })
      );
    }
  }

  openDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, { data: errorMsg });
  }

  onAddRamais() {
    this.router.navigate(['new'], { relativeTo: this.route });

  }

  onEditRamais(element: Ramais) {
    this.router.navigate(['edit', element.id], { relativeTo: this.route })
  }

  onDeleteRamais(element: Ramais) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja exculir esse ramal?',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ramaisService.deleteById(element.id).subscribe(
          {
            next: () => {
              this.refreshRamais('');
              this._snackBar.open('Ramal deletado com sucesso!', '', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
              });
            }
            , error: () => this.openDialog('Erro ao excluir ramal')
          });
      }
    });
  }
}
