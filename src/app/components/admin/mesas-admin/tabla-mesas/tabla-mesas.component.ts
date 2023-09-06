import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import { CargarMesasDialogFormComponent } from '../cargar-mesas-dialog-form/cargar-mesas-dialog-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface UserData {
  carrera: string,
  curso: string,
  nombre: string;
  titular: string;
  vocal1: string;
  vocal2: string;
  fecha:string;
}

export interface Curso {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subCursos?: any[];
}

let mesas: UserData[] = [
  {
    carrera: 'Analista',
    curso: 'Primero',
    nombre: 'SDGF',
    titular: 'Maia',
    vocal1: 'Asher',
    vocal2: 'Asher',
    fecha: '123',
  },
  {
    carrera: 'Analista',
    curso: 'Segundo',
    nombre: 'SDGHG',
    titular: 'Olivia',
    vocal1: 'Maia',
    vocal2: 'Maia',
    fecha: '123',
  },
  {
    carrera: 'Analista',
    curso: 'Tercero',
    nombre: 'DFBN',
    titular: 'Maia',
    vocal1: 'Asher',
    vocal2: 'Asher',
    fecha: '123',
  },
  {
    carrera: 'Publicidad',
    curso: 'Primero',
    nombre: 'CVCGR',
    titular: 'Amelia',
    vocal1: 'Maia',
    vocal2: 'Asher',
    fecha: '123',
  },
  {
    carrera: 'Publicidad',
    curso: 'Segundo',
    nombre: 'GFCRT',
    titular: 'Atticus',
    vocal1: 'Asher',
    vocal2: 'Amelia',
    fecha: '123',
  },
  {
    carrera: 'Publicidad',
    curso: 'Tercero',
    nombre: 'ASVBNUT',
    titular: 'Atticus',
    vocal1: 'Asher',
    vocal2: 'Amelia',
    fecha: '123',
  }
  

]; 

@Component({
  selector: 'app-tabla-mesas',
  styleUrls: ['./tabla-mesas.component.scss'],
  templateUrl: './tabla-mesas.component.html',
})

export class TablaMesasComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['nombre', 'carrera', 'curso','titular', 'vocal1','vocal2', 'fecha'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  arrayAux:any = [];
  constructor(public dialog: MatDialog, private router:Router) {
    this.arrayAux = mesas;
    this.dataSource = new MatTableDataSource(this.arrayAux);
  }

 
  ngOnInit(): void {
    
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
      this.updateTableDataSource(this.arrayAux); 
    } else {
      this.updateTableDataSource(
        this.arrayAux.filter((item: UserData) => this.selectedCursos.includes(item.curso))
      ); 
    }
  }
 
  selectOption(event: any) {
    const selectedCarrera = event.value;
    
    if (selectedCarrera === 'Todos') {
      this.updateTableDataSource(this.arrayAux);
    } else {
      const filteredArray = this.arrayAux.filter((item: { carrera: any; }) => item.carrera === selectedCarrera);
      this.updateTableDataSource(filteredArray);
    }
  }

   updateTableDataSource(filteredArray: UserData[]) {
    this.dataSource.data = filteredArray;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CargarMesasDialogFormComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  clickedRows(row:any){
    this.router.navigate(['/admin/alumnoXmesas']);
  }
}