import { Component } from '@angular/core';

@Component({
  selector: 'app-register-cards',
  templateUrl: './register-cards.component.html',
  styleUrls: ['./register-cards.component.scss']
})
export class RegisterCardsComponent {

  onCardClick(){
    console.log('¡El mat-card fue clickeado!');
  }
}
