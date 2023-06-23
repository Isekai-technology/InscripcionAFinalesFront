import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor (private router: Router){

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
      const credentials:string =  this.loginForm.get('username')!.value;
      localStorage.setItem('user',credentials);
      if (localStorage.getItem('user')=='admin')
      {
        this.router.navigateByUrl('/admin-mesas');
      }
      else{
        this.router.navigateByUrl("/home");
      }
    }
}
