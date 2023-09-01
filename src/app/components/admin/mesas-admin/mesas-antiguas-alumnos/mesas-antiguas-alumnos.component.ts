import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

export interface UserData {
  DNI : number;
  name: string;
}

let data: UserData[] = [
  {DNI: 37867864, name: 'De la Fuente Ezequiel'},
  {DNI: 40981765, name: 'Valeff Ivan'},
  {DNI: 42987765, name: 'Spatocco Franco'},
  {DNI: 40404040, name: 'Lupo Matias'},
  {DNI: 39856789, name: 'Luparini Lucas'},
  {DNI: 38888777, name: 'Giri Belen'},
  {DNI: 39999000, name: 'Vera Federico'},
  {DNI: 41111222, name: 'Coll Cristian'},
  
];
@Component({
  selector: 'app-mesas-antiguas-alumnos',
  templateUrl: './mesas-antiguas-alumnos.component.html',
  styleUrls: ['./mesas-antiguas-alumnos.component.scss']
})
export class MesasAntiguasAlumnosComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  nombreMateria: string;
  displayedColumns = ['DNI', 'name'];
  dataSource: MatTableDataSource<UserData>;

  array:any=[];
  constructor(private router:Router) {
    this.array=data;
    this.dataSource = new MatTableDataSource(this.array);
    this.nombreMateria=localStorage.getItem("materia")!;
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  volver(){
    this.router.navigate(['/admin/mesas']);
  }

  eliminarAlumno(){

  }
  darDeBaja(){
    
  }
  actaVolante(){

  }
}
