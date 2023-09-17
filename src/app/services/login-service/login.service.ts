import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { CredencialesLogin } from 'src/app/models/Credenciales';
import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string= environment.apiUrl + 'UsuariosContro.php';

  constructor(private http: HttpClient) { }

  login(credenciales: CredencialesLogin){
    const resultado= this.http.post(this.baseUrl, JSON.stringify(credenciales), {
      responseType: "text",
      //headers: { 'Content-Type': 'application/json' }
    }).subscribe((response) => {
      const res: Usuario = JSON.parse(response);
      console.log(res);
      //Tendriamos que hacer otra llamada a la API para verificar si es un estudiante o un admin
      try { //Hago un try/catch porque si no funca el login no devuelve nada
        localStorage.setItem('usuario', res.Nombre);
        localStorage.setItem('email', res.Email);
        if (res.Rol == '1')        
          localStorage.setItem('rol', 'admin');
        else
          localStorage.setItem('rol', 'usuario');
        localStorage.setItem('carrera', 'publicidad');
      } catch (error) {
        console.log(error); //Aca seria si falla el login?
      }
    });
  }

  logout(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    localStorage.removeItem('carrera');
  }
}
