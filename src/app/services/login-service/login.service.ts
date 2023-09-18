import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/Usuario';
import jwtDecode from 'jwt-decode';
import { CredencialesLogin } from 'src/app/models/Credenciales';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string= environment.apiUrl + 'UsuariosContro.php';

  constructor(private http: HttpClient) { }

  login(credenciales: CredencialesLogin){
    this.http.post(this.baseUrl, JSON.stringify(credenciales), {
      responseType: 'text',
    }).subscribe(
      (response) => {
        try {
        let res : Usuario = JSON.parse(response);
        localStorage.setItem('usuario', res.Nombre);
        localStorage.setItem('email', res.Email);
        console.log (res)
        if (res.ID_Rol == 1)        
          localStorage.setItem('rol', 'admin');
        else if(res.ID_Rol == 2)
          localStorage.setItem('rol', 'usuario');
        localStorage.setItem('carrera', 'publicidad');
      } catch (error) {
        console.log(error); 
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
