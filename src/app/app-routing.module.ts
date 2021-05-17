import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarComponent} from './Empleado/listar/listar.component';
import {ListarDComponent} from './Departamento/listar-d/listar-d.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  /*Partes de Departamento*/
  {path: 'listar-d', component: ListarDComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
