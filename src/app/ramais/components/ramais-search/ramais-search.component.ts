import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ramais-search',
  templateUrl: './ramais-search.component.html',
  styleUrls: ['./ramais-search.component.scss']
})
export class RamaisSearchComponent {
  @Output() enterSearch = new EventEmitter<string>();
  @Output() refreshSearch = new EventEmitter<boolean>(false);

  formSearch = this.formBuild.control('', [Validators.required, Validators.maxLength(100)])

  constructor(private formBuild: NonNullableFormBuilder) {
  }

  getErrorMessage() {
    if (this.formSearch?.hasError('required')) {
      return `Campo vazio.`;
    }

    if (this.formSearch?.hasError('maxlength')) {
      const requiredLength = this.formSearch.errors ? this.formSearch.errors['maxlength']['requiredLength'] : 1;
      return `Máximo de ${requiredLength} caracteres`;
    }

    return;
  }

  refreshForm() {
    return this.formSearch = this.formBuild.control('', [Validators.required, Validators.maxLength(100)]);
  }

  onSearch() {
    if (this.formSearch.invalid) {
      return;
    }

    this.enterSearch.emit(this.formSearch.value);
  }

  onRefresh() {
    this.refreshSearch.emit(true);
  }
}