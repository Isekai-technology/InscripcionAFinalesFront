import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Plan } from 'src/app/services/admin-services/admin-planes.service'; // Importa la interfaz Plan desde el servicio

@Component({
  selector: 'app-tabla-planes',
  templateUrl: './tabla-planes.component.html',
  styleUrls: ['./tabla-planes.component.scss']
})
export class TablaPlanesComponent {
  columnas: string[] = ['nombre', 'carrera', 'materias', 'acciones'];
  datos: Plan[] = []; // Inicializa datos como un arreglo vacío

  constructor(private router: Router, public dialog: MatDialog) {}

  cargarPlan() {
    this.router.navigate(['/admin/cargarPlan']);
  }

  editarPlan(plan: Plan) {
    console.log('Editar plan:', plan);
  }

  eliminarPlan(plan: Plan) {
    console.log('Eliminar plan:', plan);
  }

  verMaterias(materias: string[]) {
    if (materias && materias.length > 0) {
      console.log('Materias asociadas:', materias);
    } else {
      console.log('No hay materias asociadas a este plan.');
    }
  }
}
