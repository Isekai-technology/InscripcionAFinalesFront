import { Component } from '@angular/core';
import { AdminAlumnosService } from 'src/app/services/admin-services/admin-alumnos.service';
import { AdminUsuariosService } from 'src/app/services/admin-services/admin-usuarios.service';

@Component({
  selector: 'app-cargar-alumnos',
  templateUrl: './cargar-alumnos.component.html',
  styleUrls: ['./cargar-alumnos.component.scss']
})
export class CargarAlumnosComponent {

  carreraSeleccionada: string= "";
  idCarreraSeleccionada: number = -1;

  constructor(private _alumnosService : AdminAlumnosService, private _usuariosService: AdminUsuariosService) {}

  //tiene que haber una mejor forma de hacer esto
  seleccionarCarrera(){
    if (this.carreraSeleccionada === "analista")
      this.idCarreraSeleccionada= 1;
    else
      this.idCarreraSeleccionada= 2;
  }

  

}
