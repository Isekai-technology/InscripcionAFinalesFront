import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-cargar-materias',
  templateUrl: './cargar-materias.component.html',
  styleUrls: ['./cargar-materias.component.scss']
})
export class CargarMateriasComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Carga de Materias', cols: 1, rows: 1 },
        
        ];
      }

      return [
        { title: 'Carga de Materias', cols: 2, rows: 1 },
       
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
