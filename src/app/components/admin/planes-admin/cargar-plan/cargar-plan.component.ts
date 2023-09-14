import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Materia } from 'src/app/models/Materia';

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
  selector: 'app-cargar-plan',
  templateUrl: './cargar-plan.component.html',
  styleUrls: ['./cargar-plan.component.scss']
})
export class CargarPlanComponent {
  displayedColumns: string[] = ['select', 'nombre', 'carrera', 'curso', 'profesor'];
  dataSource = new MatTableDataSource<Materia>(alumnos);
  selection = new SelectionModel<Materia>(true, []);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  array:any=[];
  correlativaslistaux: string[] = [];
  nombreMateriaSeleccionada: string = '';
  mostrarCorrelativas: boolean = false;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Materia): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  

  constructor(private router:Router) {
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


  correlativas(correlativaslist:string[], nombreMateria:string){
    this.correlativaslistaux=correlativaslist;
    this.nombreMateriaSeleccionada = nombreMateria;
    this.mostrarCorrelativas=true;
  }

  cargar(){
    this.router.navigate(["/admin/planes"]);
  }
}


