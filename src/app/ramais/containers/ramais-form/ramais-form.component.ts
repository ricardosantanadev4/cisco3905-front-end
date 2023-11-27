import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormUtilsService } from 'src/app/shared/forms/form-utils.service';
import { Ramais } from '../../model/ramais';
import { RamaisService } from '../../services/ramais.service';

@Component({
  selector: 'app-ramais-form',
  templateUrl: './ramais-form.component.html',
  styleUrls: ['./ramais-form.component.scss']
})
export class RamaisFormComponent {

  ramaisForm = this.formBuilder.group({
    id: [''],
    ramal: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    passWord: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    serialNumber: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
    ipCentral: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
  })

  serial: string;
  constructor(private formBuilder: NonNullableFormBuilder, private ramaisService: RamaisService
    , private location: Location, private route: ActivatedRoute, public formUtils: FormUtilsService) {

    const ramais: Ramais = this.route.snapshot.data['ramal'];
    this.serial = ramais.serialNumber;
    this.ramaisForm.setValue({
      id: ramais.id,
      ramal: ramais.ramal,
      passWord: ramais.passWord,
      serialNumber: ramais.serialNumber,
      ipCentral: ramais.ipCentral
    });
  }

  onSubmit() {
    if (this.ramaisForm.invalid) {
      return this.formUtils.validateAllFormFields(this.ramaisForm);
    }

    if (this.ramaisForm.value.id) {
      return this.ramaisService.save(this.ramaisForm.value)
        .subscribe({
          next: () => this.onSucess('Ramal editado com sucesso!')
          , error: () => this.onErro('Erro ao tentar editar ramal.')
        })
    }

    return this.ramaisService.save(this.ramaisForm.value)
      .subscribe({
        next: () => this.onSucess('Ramal criado com sucesso!')
        , error: () => this.onErro('Erro ao tentar criar ramal.')
      })
  }

  onCancel() {
    this.location.back();
  }

  onSucess(response: string) {
    this.formUtils.opensnackBar(response);
    this.onCancel();
  }

  onErro(error: string) {
    this.formUtils.opensnackBar(error);
  }

}