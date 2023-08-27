import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-cards',
  templateUrl: './register-cards.component.html',
  styleUrls: ['./register-cards.component.scss']
})
export class RegisterCardsComponent {

  ///ETO TA MAL MUY MAL CORREJIR PARA QUE USE UNA CLASE EXTERNA Y LA RECIBA POR CONSTRUCTOR
  @Input() subject: string = "";
  @Input() date: Date = new Date();
  @Input() limitInscriptionDate: Date = new Date();

  onCardClick(){
    console.log('¡El mat-card fue clickeado!');
  }
}
