import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-reg-cards-subject',
  templateUrl: './reg-cards-subject.component.html',
  styleUrls: ['./reg-cards-subject.component.scss']
})
export class RegCardsSubjectComponent {
  @Input() subject: string = "";
  @Input() plan: string = "";
  
  onCardClick(){
    console.log('¡El mat-card fue clickeado!');
}}
