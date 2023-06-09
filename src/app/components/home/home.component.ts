import { Component } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  //Estados
  validUser: boolean = true; //deberá ser falso para evitar que entren directo usando la url
  
  loggedUser: User = new User;
  career: string = 'Publicidad'; //para test
  name: string = 'Juan Perez'; //para test

  onCardClick(){
    console.log('¡El mat-card fue clickeado!');
  }
}
