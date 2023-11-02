import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/Estudiante';
import { MesaExamen } from 'src/app/models/MesaExamen';
import { AdminAlumnosService } from 'src/app/services/admin-services/admin-alumnos.service';

@Component({
  selector: 'app-alumno-card',
  templateUrl: './alumno-card.component.html',
  styleUrls: ['./alumno-card.component.scss']
})
export class AlumnoCardComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'materia', 'fecha', 'profesor', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  datasource!: MatTableDataSource<MesaExamen>;

  nombreCompleto: string;
  estudiante!: Estudiante;

  constructor(private router: Router, private _alumnosServ: AdminAlumnosService){
    this._alumnosServ.estudianteSeleccionado.subscribe( e => this.estudiante= e);
    this.datasource= new MatTableDataSource(this.estudiante.mesasInscriptas);
    this.nombreCompleto= (this.estudiante.apellido.concat(', ', this.estudiante.nombre)).toUpperCase();
  }

  ngAfterViewInit(): void {        
    if (this.estudiante == null || this.estudiante.id == 0) {
      this.router.navigateByUrl('/admin/alumnos');
    }
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  addData(){

  }
  volver(){
    this.router.navigateByUrl('/admin/alumnos');
  }
  eliminar(){
    this.router.navigateByUrl('/admin/alumnos');
  }
  eliminarMesa(){

  }
}
