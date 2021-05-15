import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarComponent} from './Empleado/listar/listar.component';
import {AddComponent} from './Empleado/add/add.component';
import {EditComponent} from './Empleado/edit/edit.component';
import {ListarDComponent} from './Departamento/listar-d/listar-d.component';
import {AddDComponent} from './Departamento/add-d/add-d.component';
import {EditDComponent} from './Departamento/edit-d/edit-d.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  /*Partes de Departamento*/
  {path: 'edit-d', component: EditDComponent},
  {path: 'add-d', component: AddDComponent},
  {path: 'listar-d', component: ListarDComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
