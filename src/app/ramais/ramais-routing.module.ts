import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamaisFormComponent } from './containers/ramais-form/ramais-form.component';
import { RamaisComponent } from './containers/ramais/ramais.component';
import { RamaisResolver } from './guards/ramais.resolver';

const routes: Routes = [
  { path: '', component: RamaisComponent },
  { path: 'new', component: RamaisFormComponent, resolve: { ramal: RamaisResolver } },
  { path: 'edit/:id', component: RamaisFormComponent, resolve: { ramal: RamaisResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamaisRoutingModule { }