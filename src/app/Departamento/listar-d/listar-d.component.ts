import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../Service/service.service';

class Departamento {
  idDepartment: string;
  nameDepartment: string;
}

@Component({
  selector: 'app-listar-d',
  templateUrl: './listar-d.component.html',
  styleUrls: ['./listar-d.component.css']
})
export class ListarDComponent implements OnInit {

  departamentos: any;
  departamento: Departamento;
  nuevoDepartamento: Departamento;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.obtenerDepartamentos();
    this.nuevoDepartamento = new Departamento();
  }

  obtenerDepartamentos() {
    this.service.getAll().subscribe(res => {
      this.departamentos = res;
    });
  }

  guardar() {
    console.log(this.nuevoDepartamento.nameDepartment);
    this.service.create(this.nuevoDepartamento).subscribe(res => {
      if (res) {
        this.obtenerDepartamentos();
      }
    });
  }

  editar() {
    this.service.update(this.nuevoDepartamento).subscribe(res => {
      this.nuevoDepartamento = res;
      this.obtenerDepartamentos();
    });
  }

  eliminar(id) { }


}
