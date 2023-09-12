import { Component, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CargarMateriasDialogFormComponent } from '../cargar-materias-dialog-form/cargar-materias-dialog-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Materia } from 'src/app/models/Materia';
import { ModificarMateriasDialogFormComponent } from '../modificar-materias-dialog-form/modificar-materias-dialog-form.component';


export interface Curso {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subCursos?: any[];
}

let alumnos: Materia[] = [
  {
    id:1,
    nombre:"MATEMATICA",
    carrera:"Analista",
    curso:"Primero",
    profesor: "HYRGWVR4E",
    correlativas: [
      'gfdsfafas','fgdsagdsa','gfasdgafs'
    ],
    plan: "asf",
  },
  {
    id:2,
    nombre:"CALCULO",
    carrera:"Publicidad",
    curso:"Segundo",
    profesor: "JUTNBTRFY",
    correlativas: [
      'cxvtyry5es','btyedrsxfgc','aw4tgd'
    ],
    plan: "asf",
  },
  {
    id:3,
    nombre:"PROGRAMACION",
    carrera:"Analista",
    curso:"Tercero",
    profesor: "MUNYHTBGR",
    correlativas: [
      'vtrwsdfg','awthfx','gfasdgafs'
    ],
    plan: "asf",
  }]

@Component({
  selector: 'app-materias-tabla',
  templateUrl: './materias-tabla.component.html',
  styleUrls: ['./materias-tabla.component.scss']
})


export class MateriasTablaComponent {
  displayedColumns: string[] = ['id', 'nombre', 'carrera','curso', 'profesor', 'plan', 'correlativas', 'modificar', 'eliminar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<Materia>;
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
        this.array.filter((item: Materia) => this.selectedCursos.includes(item.curso))
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

  updateTableDataSource(filteredArray: Materia[]) {
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

  editarAlumno(datos:Materia){
    const dialogRef = this.dialog.open(ModificarMateriasDialogFormComponent, {
      width: '400px',
      data: datos,
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  eliminarAlumno(){

  }

}
