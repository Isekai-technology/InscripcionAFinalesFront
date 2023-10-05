import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminAlumnosService } from 'src/app/services/admin-services/admin-alumnos.service';
import { AdminUsuariosService } from 'src/app/services/admin-services/admin-usuarios.service';

@Component({
  selector: 'app-cargar-alumnos',
  templateUrl: './cargar-alumnos.component.html',
  styleUrls: ['./cargar-alumnos.component.scss']
})
export class CargarAlumnosComponent {

  idCarreraSeleccionada: number = -1;
  idPlanSeleccionado: number = -1;

  carreras= [
    {id: 1, nombre: 'Analista de Sistemas'},
    {id: 2, nombre: 'Publicidad'}
  ]

  //campos del formulario
  nombre= new FormControl("");
  apellido= new FormControl("");
  documento= new FormControl("");
  email= new FormControl("");

  constructor(private _alumnosService : AdminAlumnosService, private _usuariosService: AdminUsuariosService) {}

  guardarEstudiante(){
    //tomar datos del form

    //validaciones
    if (this.idCarreraSeleccionada <= 0){
      console.log('No se selecciono una carrera');
      return;
    }

    if (this.idPlanSeleccionado <= 0){
      console.log('No se selecciono un plan');
      return;
    }

    //llamar al servicio de usuarios, crear usuario y obtener id

    //llamar al servicio de alumnos y crear alumno
  }

}
