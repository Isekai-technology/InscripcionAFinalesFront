import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Estudiante } from 'src/app/models/Estudiante';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminAlumnosService {
  
  baseUrl= environment.apiUrl + "EstudiantesContro.php";

  //tiene que haber una mejor forma de hacer esto
  private estudianteSource: BehaviorSubject<Estudiante> = new BehaviorSubject<Estudiante>({
    id:0,
    nombre:"",
    apellido:"",
    dni: "",
    carrera: "",
    curso: "",
    mesasInscriptas: [],
    usuario: {
      ID: 0, Nombre: "", Contra: "", Email: "", ID_Rol: 0
    },
    plan: ""
  });

  estudianteSeleccionado= this.estudianteSource.asObservable();

  constructor() { }

  seleccionarEstudiante(estudiante: Estudiante){
    this.estudianteSource.next(estudiante);
  }

  nuevoEstudiante(idUsuario: number, estudiante: Estudiante){
    let datos= {
      DNI: estudiante.dni,
      Nombre: estudiante.nombre,
      Apellido: estudiante.apellido,
      Activo: 1,
      ID_Carrera: 0,
      ID_Plan: 0,
      ID_Usuario: idUsuario
    }    

    
  }

}
