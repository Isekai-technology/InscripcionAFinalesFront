import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Estudiante } from 'src/app/models/Estudiante';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminAlumnosService {
  
  baseUrl= environment.apiUrl + "EstudianteControl.php";

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
    plan: 1
  });

  estudianteSeleccionado= this.estudianteSource.asObservable();

  constructor(private http: HttpClient) { }

  seleccionarEstudiante(estudiante: Estudiante){
    this.estudianteSource.next(estudiante);
  }

  nuevoEstudiante(estudiante: Estudiante){
    let datos= {
      dni: estudiante.dni,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      activo: 1,
      id_plan: estudiante.plan,
      id_usuario: estudiante.usuario.ID,
      tipo: "crear"
    };  

    return this.http.post(this.baseUrl, JSON.stringify(datos), {
      responseType: 'text'
    });
    
  }

}
