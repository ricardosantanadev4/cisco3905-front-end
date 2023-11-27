import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamaisRoutingModule } from './ramais-routing.module';
import { RamaisComponent } from './containers/ramais/ramais.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { RamaisFormComponent } from './containers/ramais-form/ramais-form.component';
import { RamaisListComponent } from './components/ramais-list/ramais-list.component';
import { RamaisSearchComponent } from './components/ramais-search/ramais-search.component';


@NgModule({
  declarations: [
    RamaisComponent,
    RamaisFormComponent,
    RamaisListComponent,
    RamaisSearchComponent
  ],
  imports: [
    CommonModule,
    RamaisRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class RamaisModule { }
