import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Plan, Planes } from 'src/app/services/admin-services/admin-planes.service'; 

@Component({
  selector: 'app-tabla-planes',
  templateUrl: './tabla-planes.component.html',
  styleUrls: ['./tabla-planes.component.scss']
})
export class TablaPlanesComponent implements OnInit {
  columnas: string[] = ['nombre', 'carrera', 'materias'];
  datos: Plan[] = [];
  dataSource!: MatTableDataSource<Plan>;

  constructor(private router: Router, public dialog: MatDialog) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.datos = Planes; 
    this.dataSource = new MatTableDataSource(this.datos);
    this.dataSource.sort = this.sort;
  }

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
