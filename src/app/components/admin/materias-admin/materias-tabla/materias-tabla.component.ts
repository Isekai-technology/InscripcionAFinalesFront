import { Component, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CargarMateriasDialogFormComponent } from '../cargar-materias-dialog-form/cargar-materias-dialog-form.component';
import { MatDialog } from '@angular/material/dialog';

export interface materias{
  id:number,
  nombre:string,
  carrera:string,
  curso:string,
  titular:string,
  correlativas: string[],
}

export interface Curso {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subCursos?: any[];
}

let alumnos: materias[] = [
  {
    id:1,
    nombre:"MATEMATICA",
    carrera:"Analista",
    curso:"Primero",
    titular: "HYRGWVR4E",
    correlativas: [
      'gfdsfafas','fgdsagdsa','gfasdgafs'
    ],
  },
  {
    id:2,
    nombre:"CALCULO",
    carrera:"Publicidad",
    curso:"Segundo",
    titular: "JUTNBTRFY",
    correlativas: [
      'cxvtyry5es','btyedrsxfgc','aw4tgd'
    ],
  },
  {
    id:3,
    nombre:"PROGRAMACION",
    carrera:"Analista",
    curso:"Tercero",
    titular: "MUNYHTBGR",
    correlativas: [
      'vtrwsdfg','awthfx','gfasdgafs'
    ],
  }]

@Component({
  selector: 'app-materias-tabla',
  templateUrl: './materias-tabla.component.html',
  styleUrls: ['./materias-tabla.component.scss']
})


export class MateriasTablaComponent {
  displayedColumns: string[] = ['id', 'nombre', 'carrera','curso', 'titular', 'correlativas'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<materias>;
  array:any=[];
  correlativaslistaux: string[] = [];
  nombreMateriaSeleccionada: string = '';
  mostrarCorrelativas: boolean = false;

  constructor(private dialog : MatDialog) {
    this.array=alumnos;
    this.dataSource = new MatTableDataSource(this.array);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  cursos: Curso = {
    name: "cursos",
    completed: false,
    color: 'primary',
    subCursos:[
      {
        name:"Primero",
        completed: false, 
        color: 'primary'
      },
      {
        name:"Segundo",
        completed: false, 
        color: 'primary'
      },
      {
        name:"Tercero",
        completed: false, 
        color: 'primary'
      }],
  };

  allComplete: boolean = false;

  selectedCursos: string[] = []; 
  updateAllComplete(event: any, subCurso: string) {
    if (event) {
      this.selectedCursos.push(subCurso);
    } else {
      this.selectedCursos = this.selectedCursos.filter(curso => curso !== subCurso);
    }
    if (this.selectedCursos.length === 0) {
      this.updateTableDataSource(this.array); 
    } else {
      this.updateTableDataSource(
        this.array.filter((item: materias) => this.selectedCursos.includes(item.curso))
      ); 
    }
  }

  selectOption(event: any) {
    const selectedCarrera = event.value;
    
    if (selectedCarrera === 'Todos') {
      this.updateTableDataSource(this.array);
    } else {
      const filteredArray = this.array.filter((item: { carrera: any; }) => item.carrera === selectedCarrera);
      this.updateTableDataSource(filteredArray);
    }
  }

  updateTableDataSource(filteredArray: materias[]) {
    this.dataSource.data = filteredArray;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CargarMateriasDialogFormComponent, {
      width: '400px',
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  correlativas(correlativaslist:string[], nombreMateria:string){
    this.correlativaslistaux=correlativaslist;
    this.nombreMateriaSeleccionada = nombreMateria;
    this.mostrarCorrelativas=true;
  }

}
