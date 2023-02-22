import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamaisFormComponent } from './ramais-form/ramais-form.component';
import { RamaisComponent } from './ramais/ramais.component';

const routes: Routes = [
  { path: '', component: RamaisComponent },
  { path: 'new', component: RamaisFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamaisRoutingModule { }
