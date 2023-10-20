  import { Component } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';

  import { CredencialesLogin } from 'src/app/models/Credenciales';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/guard-services/auth.service';
  import { LoginService } from 'src/app/services/login-service/login.service';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
  })
  export class LoginComponent {

    constructor(private router: Router, private _loginSer: LoginService, private auth: AuthService) {
      localStorage.clear();
    }

    // Estados
    failedLogin: boolean = false;
    notRegistered: boolean = false;
    registrationOk: boolean = false;
    usernameAlreadyExists: boolean = false;

    // Formulario
    loginForm = new FormGroup({
      username: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
      password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    });

    submit() {
      const credentials: CredencialesLogin = {
        nombre: this.loginForm.get('username')!.value,
        contra: this.loginForm.get('password')!.value,
        tipo: 'login'
      };

      
      this._loginSer.login(credentials).subscribe(
        (response: string) => { 
          let user= JSON.parse(response) as Usuario;
          const rol = user.ID_Rol;
          this.auth.login(user);
          if (rol == 1){       
            this.router.navigateByUrl('/admin');
          }
          else{
            //traer datos de estudiante de la API
            this.router.navigateByUrl('/home');
          }

        },
        (error: any) => { 
          
          console.error(error);
        }
      );
    }
  }
