import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-alumnos-dashboard',
  templateUrl: './alumnos-dashboard.component.html',
  styleUrls: ['./alumnos-dashboard.component.scss']
})
export class AlumnosDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
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
