import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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

  constructor (private router: Router){
    
  }

  cargarPlan(){
    this.router.navigate(['/admin/cargarPlan']);
  }

  /*
  abrirVentanaCargarPlanes(): void {
    const dialogRef = this.cargarPlanes.open(CargarPlanDialogFormComponent, {
      width: '400px',
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }*/
}
