import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface materias{
  id:number,
  name: string,
  curso:string,
  titular: string,
  fecha: number,
}

let materiasinscr: materias[] = [
  {id: 1, name: 'Hydrogen', curso: "Primero", titular: "gedvsvs", fecha: 643234},
  {id: 2, name: 'Helium', curso: "Segundo",titular: "vsrsre", fecha: 7654},
  {id: 3, name: 'Lithium',curso: "Tercero", titular: "btyrvfd", fecha: 234},
  {id: 4, name: 'Beryllium', curso: "Primero",titular: "yrtdsf", fecha: 546},
]
@Component({
  selector: 'app-profesores-card',
  templateUrl: './profesores-card.component.html',
  styleUrls: ['./profesores-card.component.scss']
})
export class ProfesoresCardComponent {
  displayedColumns: string[] = ['id', 'name', 'curso', 'titular', 'fecha', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  datasource: MatTableDataSource<materias>
  array:any[];
  constructor(private router: Router){
    this.array=materiasinscr;
    this.datasource= new MatTableDataSource(this.array);
  }

  ngAfterViewInit(): void {
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
