import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vista: string = ''; //ESTO ESTA MUY MAL SOLO ESTA PARA PROBAR, HAY QUE HACER EL ROUTING

  title = 'Inscripcion A Finales';
}
