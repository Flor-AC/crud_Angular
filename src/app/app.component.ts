import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular';

  constructor(private router: Router){}

  Empleado() {
    this.router.navigate(['listar']);
  }

  Departamento() {
    this.router.navigate(['listar-d']);
  }
}
