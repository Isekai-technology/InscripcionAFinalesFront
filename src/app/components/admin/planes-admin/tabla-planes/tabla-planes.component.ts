import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

export interface Plan {
  nombre: string,
  carrera: string
}

const Planes: Plan[] = [
  {nombre: "ASDGF", carrera: "Analista"},
  {nombre: "YDSYH", carrera: "Publicidad"}
];

@Component({
  selector: 'app-tabla-planes',
  templateUrl: './tabla-planes.component.html',
  styleUrls: ['./tabla-planes.component.scss']
})
export class TablaPlanesComponent {
  columnas: string[] = ['nombre', 'carrera', 'acciones'];
  datos = Planes;

}
