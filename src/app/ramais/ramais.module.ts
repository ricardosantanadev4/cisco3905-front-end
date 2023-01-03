import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamaisRoutingModule } from './ramais-routing.module';
import { RamaisComponent } from './ramais/ramais.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    RamaisComponent
  ],
  imports: [
    CommonModule,
    RamaisRoutingModule,
    AppMaterialModule
  ]
})
export class RamaisModule { }
