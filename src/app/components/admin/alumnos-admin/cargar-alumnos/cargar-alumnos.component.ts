import { Component } from '@angular/core';
import { Carrera } from 'src/app/models/Carrera';
import { Estudiante } from 'src/app/models/Estudiante';
import { Usuario } from 'src/app/models/Usuario';
import { AdminAlumnosService } from 'src/app/services/admin-services/admin-alumnos.service';
import { AdminUsuariosService } from 'src/app/services/admin-services/admin-usuarios.service';

interface ModeloForm {
  nombre: string;
  apellido: string;
  documento: string;
  email: string;
  idCarreraSeleccionada: number;
  idPlanSeleccionado: number;
}

@Component({
  selector: 'app-cargar-alumnos',
  templateUrl: './cargar-alumnos.component.html',
  styleUrls: ['./cargar-alumnos.component.scss']
})
export class CargarAlumnosComponent { 

  //tienen que venir de la api, junto con los planes
  carreras: Carrera[]= [
    {id: 1, nombre: 'Analista de Sistemas'},
    {id: 2, nombre: 'Publicidad'}
  ]

  //campos del formulario
  modelo: ModeloForm = {
    nombre: '',
    apellido: '',
    documento: '',
    email: '',
    idCarreraSeleccionada: -1,
    idPlanSeleccionado: -1
  }

  constructor(private _alumnosService : AdminAlumnosService, private _usuariosService: AdminUsuariosService) {}

  guardarEstudiante(){
    //test
    console.log(this.modelo);

    //validaciones   
    if (this.modelo.idCarreraSeleccionada <= 0){
      console.log('No se selecciono una carrera');
      return;
    }

    if (this.modelo.idPlanSeleccionado <= 0){
      console.log('No se selecciono un plan');
      return;
    }

    
    let nuevoUsuario: Usuario = {
      ID: 0,
      Nombre: this.modelo.documento,
      Contra: this.modelo.documento,
      Email: this.modelo.email,
      ID_Rol: 2
    }
    
    //llamar al servicio de usuarios, crear usuario y obtener id
    this._usuariosService.crearUsuario(nuevoUsuario).subscribe(
      (resp: string) => {
        nuevoUsuario.ID= JSON.parse(resp) as number;

        let estudiante: Estudiante = {
          id: 0,
          nombre: this.modelo.nombre,
          apellido: this.modelo.apellido,
          dni: this.modelo.documento,
          usuario: nuevoUsuario,
          carrera: "",
          curso: "",
          plan: this.modelo.idPlanSeleccionado,
          mesasInscriptas: [

          ]
        }

        //llamar al servicio de alumnos y crear alumno
        this._alumnosService.nuevoEstudiante(estudiante).subscribe(
          (resp: string) => {
            console.log("exito");
          },
          (error: any) => {
            console.log(error);
          }
        );

      },
      (error: any) => {
        console.log(error);
      }
    );
    


    
  }

  //test
  enviar(valores: any){
    console.log(valores);
  }

}
