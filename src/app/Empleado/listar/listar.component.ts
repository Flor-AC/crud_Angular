import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../Service/service.service';

class Empleado {
  idEmployee: string;
  nameEmployee: string;
  phoneEmployee: string;
}

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  empleados: any;
  empleado: Empleado;
  nuevoEmpleado: Empleado;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.obtenerEmplados();
    this.nuevoEmpleado = new Empleado();
  }

  obtenerEmplados() {
    this.service.getAll().subscribe(res => {
      this.empleados = res;
    });
  }

  guardar() {
    console.log(this.nuevoEmpleado.nameEmployee);
    this.service.createE(this.nuevoEmpleado).subscribe(res => {
      if (res) {
        this.obtenerEmplados();
      }
    });
  }

}
