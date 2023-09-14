import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { CredencialesLogin } from 'src/app/models/Credenciales';
import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string= environment.apiUrl + 'UsuariosContro/';

  constructor(private http: HttpClient, private router: Router) { }

  login(credenciales: CredencialesLogin) : Usuario | Boolean{
    this.http.post(this.baseUrl + "/login", JSON.stringify(credenciales), {
      responseType: "text",
      headers: { 'ContentType': 'application/json' }
    }).subscribe((response) => {
      const res= JSON.parse(response);
      console.log(res);
      if (res){
        return new Usuario(res["Nombre"], res["Email"], res["Rol"]);
        // if (usuario.rol == 1)
        //   this.router.navigateByUrl('/admin');
        // else
        //   this.router.navigateByUrl('/home');
      }
      else return false;
    });
    return false;
  }

}
