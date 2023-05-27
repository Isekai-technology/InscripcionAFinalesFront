import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  //Estados
  validUser: boolean = true; //deberá ser falso para evitar que entren directo usando la url
  
  usuario: Usuario = new Usuario;
  carrera: string = 'Analista de Sistemas';

}
