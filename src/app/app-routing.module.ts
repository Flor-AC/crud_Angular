import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarComponent} from './Empleado/listar/listar.component';
import {EditComponent} from './Empleado/edit/edit.component';
import {ListarDComponent} from './Departamento/listar-d/listar-d.component';
import {EditDComponent} from './Departamento/edit-d/edit-d.component';
import {AddComponent} from './Empleado/add/add.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'edit', component: EditComponent},
  {path: 'add', component: AddComponent},
  /*Partes de Departamento*/
  {path: 'add-d', component: AddComponent},
  {path: 'edit-d', component: EditDComponent},
  {path: 'listar-d', component: ListarDComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
