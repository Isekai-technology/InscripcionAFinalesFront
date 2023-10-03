import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AdminAlumnosService } from 'src/app/services/admin-services/admin-alumnos.service';
import { AdminUsuariosService } from 'src/app/services/admin-services/admin-usuarios.service';

@Component({
  selector: 'app-cargar-alumnos',
  templateUrl: './cargar-alumnos.component.html',
  styleUrls: ['./cargar-alumnos.component.scss']
})
export class CargarAlumnosComponent {

  constructor(private _alumnosService : AdminAlumnosService, private _usuariosService: AdminUsuariosService) {}

  
}
