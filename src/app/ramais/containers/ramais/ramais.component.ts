import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { FormUtilsService } from 'src/app/shared/forms/form-utils.service';
import { Ramais } from '../../model/ramais';
import { RamalPage } from '../../model/ramal-page';
import { RamaisService } from '../../services/ramais.service';

@Component(
  {
    selector: 'app-ramais',
    templateUrl: './ramais.component.html',
    styleUrls: ['./ramais.component.scss']
  }
)
export class RamaisComponent {
  ramais$: Observable<RamalPage> | null = null;
  pageSize!: number;
  pageIndex!: number;
  showPageSizeOptions = true;

  constructor(
    public ramaisService: RamaisService, public dialog: MatDialog, private router: Router,
    private route: ActivatedRoute, private _snackBar: MatSnackBar, private paginatorIntl: MatPaginatorIntl,
    private formUtilsService: FormUtilsService
  ) {
    this.refresh(true);
    this.paginatorLabel(paginatorIntl);
  }

  refresh(event: boolean | string, pageEvent: PageEvent = { length: 0, pageIndex: 0, pageSize: 10 }) {
    if (event == true) {
      this.ramais$ = this.ramaisService.list('', pageEvent.pageIndex, pageEvent.pageSize).pipe(
        tap(
          () => {
            this.pageIndex = pageEvent.pageIndex, this.pageSize = pageEvent.pageSize
          }
        ),
        catchError(
          () => {
            this.openDialog('Erro ao carregar recursos.');
            return of({ ramais: [], totalElements: 0 })
          }
        )
      );
    } else {
      this.ramais$ = this.ramaisService.list(event, pageEvent.pageIndex, pageEvent.pageSize).pipe(
        catchError(
          () => {
            this.openDialog('Erro ao carregar recursos.');
            return of(
              { ramais: [], totalElements: 0 }
            )
          }
        )
      );
    }
  }

  paginatorLabel(paginatorIntl: MatPaginatorIntl) {
    paginatorIntl.itemsPerPageLabel = 'Itens por página';
    paginatorIntl.firstPageLabel = 'Primeira página';
    paginatorIntl.previousPageLabel = 'Página anterior';
    paginatorIntl.nextPageLabel = 'Próxima página';
    paginatorIntl.lastPageLabel = 'Última página';
    paginatorIntl.getRangeLabel = this.getRangeLabel;
  }

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    const totalPages = Math.ceil(length / pageSize);
    return `Exibindo de ${startIndex + 1} até ${endIndex} - Total Listado ${length} - Página ${page + 1} - Total de páginas ${totalPages}`;
  };

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
    const dialogRef = this.formUtilsService.openDialog('Tem certeza que deseja exculir esse ramal?');

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.ramaisService.deleteById(element.id).subscribe(
            {
              next: () => {
                this.refresh('');

                this.formUtilsService.opensnackBar('Ramal deletado com sucesso!', 'blue-snackbar')
              },
              error: () => this.formUtilsService.opensnackBar(
                'Erro!\n' + 'Ocorreu um erro ao tentar excluir o ramal,\n' + 'favor entrar em contato com o suporte.',
                'red-snackbar'
              )
            }
          );
        }
      });
  }
}