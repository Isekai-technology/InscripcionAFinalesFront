import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  selector: 'app-mesas-antiguas',
  templateUrl: './mesas-antiguas.component.html',
  styleUrls: ['./mesas-antiguas.component.scss']
})
export class MesasAntiguasComponent implements AfterViewInit, OnInit {
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


  items: UserData[] = []; // Tu lista de items

  filteredItems: UserData[] = [];
  selectedMonth: number | undefined;

  filterByMonth() {
    this.filteredItems = this.items.filter(item => {
      const itemDate = new Date(item.fecha);
      return itemDate.getMonth() === this.selectedMonth;
    });
  }

  startDate = new Date(2020, 0, 1);
  

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

  ngOnInit(): void {
    
  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  openDialog(){
    
  }

  volver(){
    this.router.navigate(['/admin/mesas']);
  }

}
