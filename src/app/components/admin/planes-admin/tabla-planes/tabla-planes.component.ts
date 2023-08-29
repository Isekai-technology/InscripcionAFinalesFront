import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

export interface Plan {
  descripcion: string,
  anio: string,
  carrera: string
}

const Planes: Plan[] = [
  {descripcion: "ASDGF", anio: "2023", carrera: "Analista"},
  {descripcion: "YDSYH", anio: "2023", carrera: "Publicidad"}
];

@Component({
  selector: 'app-tabla-planes',
  templateUrl: './tabla-planes.component.html',
  styleUrls: ['./tabla-planes.component.scss']
})
export class TablaPlanesComponent {
  columnas: string[] = ['Descripcion', 'Año', 'Carrera'];
  datos = Planes;

}
