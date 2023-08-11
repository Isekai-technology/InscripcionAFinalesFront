import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-cargar-alumnos',
  templateUrl: './cargar-alumnos.component.html',
  styleUrls: ['./cargar-alumnos.component.scss']
})
export class CargarAlumnosComponent {
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
