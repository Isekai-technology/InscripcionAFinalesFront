import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Estudiante } from 'src/app/models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class AdminAlumnosService {

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
      id: 0, Nombre: "", contra: "", Email: "", ID_Rol: 0
    },
    plan: ""
  });

  estudianteSeleccionado= this.estudianteSource.asObservable();

  seleccionarEstudiante(estudiante: Estudiante){
    this.estudianteSource.next(estudiante);
  }

  constructor() { }
}
