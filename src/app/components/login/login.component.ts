import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { CredencialesLogin } from 'src/app/models/Credenciales';
import { Usuario } from 'src/app/models/Usuario';
import { LoginService } from 'src/app/services/login-service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {

  constructor (private router: Router, private _loginSer: LoginService){

  }

  // Estados
  failedLogin: boolean = false;
  notRegistered: boolean = false;
  registrationOk: boolean = false;
  usernameAlreadyExists: boolean = false;

  // Formulario
  loginForm = new FormGroup({
    username: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    password: new FormControl<string>('',  {nonNullable: true, validators: Validators.required}),
  });

    login() {
      const credentials: CredencialesLogin = {
        nombre: this.loginForm.get('username')!.value,
        contra: this.loginForm.get('password')!.value,
        tipo: 'login'
      };
      
      const res = this._loginSer.login(credentials);

      if (res) {
        const usuario: Usuario= res as Usuario;
        localStorage.setItem('user',usuario.nombre);
        localStorage.setItem('email', usuario.email);
        localStorage.setItem('rol', usuario.rol.toString());
        if (usuario.rol == 1) {
          this.router.navigateByUrl('/admin');
        }
        else{
          this.router.navigateByUrl("/home");
        }
      }


    }
}
