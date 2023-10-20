import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminUsuariosService {

  baseUrl: string= environment.apiUrl + 'UsuariosControl.php' ;

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: Usuario): Observable<any>{        
    let datos= {
      nombre: usuario.Nombre,
      contra: usuario.Contra,
      email: usuario.Email,
      rol: usuario.ID_Rol,
      tipo: 'crear'
    };
    console.log(datos);

    //Devuelve el ID del ultimo usuario insertado
    return this.http.post(this.baseUrl, JSON.stringify(datos), {
      responseType: 'text',
    });

  }

}
