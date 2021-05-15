import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Empleado/listar/listar.component';
import { AddComponent } from './Empleado/add/add.component';
import { EditComponent } from './Empleado/edit/edit.component';
import { AddDComponent } from './Departamento/add-d/add-d.component';
import { EditDComponent } from './Departamento/edit-d/edit-d.component';
import { ListarDComponent } from './Departamento/listar-d/listar-d.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    AddDComponent,
    EditDComponent,
    ListarDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
