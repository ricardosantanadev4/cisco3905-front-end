import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  validateAllFormFields(formGroup: UntypedFormGroup | UntypedFormArray) {
    Object.keys(formGroup.controls).forEach(
      field => {
        const control = formGroup.get(field);
        if (control instanceof UntypedFormControl) {
          control.markAsTouched(
            { onlySelf: true }
          );
        } else if (control instanceof UntypedFormGroup || control instanceof UntypedFormArray) {
          control.markAsTouched(
            { onlySelf: true }
          );
          this.validateAllFormFields(control);
        }
      }
    );
  }

  getErrorMessage(formGroup: UntypedFormGroup, fieldName: string) {
    const field = formGroup.get(fieldName) as UntypedFormControl;
    return this.getErrorMessageFromField(field);
  }

  getErrorMessageFromField(field: UntypedFormControl) {
    if (field?.hasError('required')) {
      return 'Você deve inserir um valor';
    }

    if (field?.hasError('minlength')) {
      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 1;
      return `O campo deve conter no mínimo ${requiredLength} caracteres`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 1;
      return `O campo deve conter no máximo ${requiredLength} caracters`;
    }

    return 'Erro!';
  }

  opensnackBar(response: string, scssClassName: string) {
    console.log(scssClassName);
    this._snackBar.open(
      response, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: scssClassName
    }
    );
  }

  openDialog(message: string) {
    return this.dialog.open(
      ConfirmationDialogComponent, {
      data: message,
    }
    );
  }
}