import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamaisRoutingModule } from './ramais-routing.module';
import { RamaisComponent } from './ramais/ramais.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { RamaisFormComponent } from './ramais-form/ramais-form.component';


@NgModule({
  declarations: [
    RamaisComponent,
    RamaisFormComponent
  ],
  imports: [
    CommonModule,
    RamaisRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class RamaisModule { }
