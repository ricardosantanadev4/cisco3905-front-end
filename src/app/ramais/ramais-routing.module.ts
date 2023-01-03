import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamaisComponent } from './ramais/ramais.component';

const routes: Routes = [
  { path: '', component: RamaisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamaisRoutingModule { }
