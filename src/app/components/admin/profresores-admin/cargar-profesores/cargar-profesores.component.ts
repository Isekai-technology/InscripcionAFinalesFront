import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-cargar-profesores',
  templateUrl: './cargar-profesores.component.html',
  styleUrls: ['./cargar-profesores.component.scss']
})
export class CargarProfesoresComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Carga de Alumnos', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Carga de Alumnos', cols: 2, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
