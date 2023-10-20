import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Importa Observable desde 'rxjs'
import { environment } from 'src/environments/environment';
import { CredencialesLogin } from 'src/app/models/Credenciales';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = environment.apiUrl + 'UsuariosControl.php';

  constructor(private http: HttpClient) { }

  // Modifica el método login para que devuelva un Observable<any>
  login(credenciales: CredencialesLogin): Observable<any> {
    return this.http.post(this.baseUrl, JSON.stringify(credenciales), {
      responseType: 'text',
    });
  }

  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    localStorage.removeItem('carrera');
  }
}
