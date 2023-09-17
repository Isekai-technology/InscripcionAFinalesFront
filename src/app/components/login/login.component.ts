import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';

import { CredencialesLogin } from 'src/app/models/Credenciales';
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

  submit() {
    const credentials: CredencialesLogin = {
      nombre: this.loginForm.get('username')!.value,
      contra: this.loginForm.get('password')!.value,
      tipo: 'login'
    };
      
    this._loginSer.login(credentials);

    const rol= localStorage.getItem('rol');
    console.log(rol);

    if (rol == 'admin') {
      this.router.navigateByUrl('/admin');
    }
    else{
      this.router.navigateByUrl("/home");
    }
    
    /*
    if (res != null) {
      const usuario: Usuario= res as Usuario;
      console.log(usuario);
      localStorage.setItem('user',usuario.nombre);
      localStorage.setItem('email', usuario.email);
      localStorage.setItem('rol', usuario.rol.toString());
      localStorage.setItem('carrera', 'publicidad');

    }*/
  }

}
