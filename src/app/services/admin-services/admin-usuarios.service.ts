import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminUsuariosService {

  baseUrl: string= environment.apiUrl + 'UsuariosContro.php' ;

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: Usuario): Observable<any>{        
    //ESTO no esta bien. ¿Quejas? Al back que hizo asi la API jajajaja
    let datos= {
      Nombre: usuario.Nombre,
      Contra: usuario.Contra,
      Email: usuario.Email,
      ID_Rol: usuario.ID_Rol,
      tipo: 'crear'
    };

    //Devuelve el ID del ultimo usuario insertado
    return this.http.post(this.baseUrl, JSON.stringify(datos), {
      responseType: 'text',
    });

  }

}
