import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Observable, map, startWith } from 'rxjs';

import { CargarAlumnosComponent } from '../cargar-alumnos/cargar-alumnos.component';
import { Estudiante } from 'src/app/models/Estudiante';
import { AdminAlumnosService } from 'src/app/services/admin-services/admin-alumnos.service';

export interface Curso {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subCursos?: any[];
}

//BOILERPLATE DE EJEMPLO, ESTOS DATOS VENDRIAN DE UN SERVICIO
let alumnosEjemplo: Estudiante[] = [
  {
    id:1,
    nombre:"Hernan",
    apellido:"Cordoba",
    dni: "543223151",
    carrera: "Analista",
    curso: "Primero",
    mesasInscriptas: [ 
      {id: 1, materia: "Algebra", fecha: new Date(2023, 10, 7), profesor: "Jose Campos"},
      {id: 1, materia: "Algoritmos", fecha: new Date(2023, 10, 7), profesor: "Javier Fuentes"},
      {id: 1, materia: "Practicas Prof", fecha: new Date(2023, 10, 7), profesor: "Jose Campos"}
    ],
    usuario: {
      id: 1, Nombre: "654354254", contra: "", Email: "hernan@gmail.com", ID_Rol: 2
    },
    plan: "2023/09"
  },
  {
    id:2,
    nombre:"Juan",
    apellido:"Perez",
    dni: "215312632",
    carrera: "Publicidad",
    curso: "Segundo",
    mesasInscriptas: [ 
      {id: 1, materia: "Computacion I", fecha: new Date(2023, 10, 5), profesor: "Javier Fuentes"},
      {id: 1, materia: "Ingles I", fecha: new Date(2023, 10, 9), profesor: "Valeria"},
      {id: 1, materia: "Introduccion a la Publicidad", fecha: new Date(2023, 10, 4), profesor: "Ramiro Sansinanea"}
    ],
    usuario: {
      id: 1, Nombre: "654354254", contra: "", Email: "juan@gmail.com", ID_Rol: 2
    },
    plan: "2023/09"
  },
  {
    id:3,
    nombre:"Paula",
    apellido:"Dominguez",
    dni: "654354254",
    carrera: "Analista",
    curso: "Tercero",
    mesasInscriptas: [ 
      {id: 1, materia: "Algebra", fecha: new Date(2023, 10, 6), profesor: "Jose Campos"},
      {id: 1, materia: "Algoritmos", fecha: new Date(2023, 10, 5), profesor: "Javier Fuentes"},
      {id: 1, materia: "Practicas Prof I", fecha: new Date(2023, 10, 4), profesor: "Ramiro Sansinanea"}
    ],
    usuario: {
      id: 1, Nombre: "654354254", contra: "", Email: "paula@gmail.com", ID_Rol: 2
    },
    plan: "2023/09"
  },
  {
    id:4,
    nombre:"Sebastian",
    apellido:"Lopez",
    dni: "87654312",
    carrera: "Publicidad",
    curso: "Primero",
    mesasInscriptas: [ 
      {id: 1, materia: "Produccion Grafica", fecha: new Date(2023, 10, 6), profesor: "El hermano de Marce"},
      {id: 1, materia: "Computacion I", fecha: new Date(2023, 10, 5), profesor: "Javier Fuentes"},
      {id: 1, materia: "Introduccion a la Publicidad", fecha: new Date(2023, 10, 4), profesor: "Ramiro Sansinanea"}
    ],
    usuario: {
      id: 1, Nombre: "654354254", contra: "", Email: "seba@gmail.com", ID_Rol: 2
    },
    plan: "2023/09"
  }
]

export interface User {
  name: string;
}


@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.scss'],
  providers: [AdminAlumnosService]
})
export class AlumnosTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'nombre', 'apellido','DNI', 'carrera', 'curso'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<Estudiante>;
  array:any=[];
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]> | undefined;

  constructor(private router: Router,private dialog : MatDialog, private _alumnosServ: AdminAlumnosService) {
    this.array=alumnosEjemplo;
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
        this.array.filter((item: Estudiante) => this.selectedCursos.includes(item.curso))
      ); 
    }
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
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

  updateTableDataSource(filteredArray: Estudiante[]) {
    this.dataSource.data = filteredArray;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  agregarMesa(){
    const dialogRef = this.dialog.open(CargarAlumnosComponent, {
      width: '400px',
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  clickedRows(rowId:number){
    let estudiante: Estudiante = alumnosEjemplo.find( e => e.id= rowId) as Estudiante;
    this._alumnosServ.seleccionarEstudiante(estudiante);
    this.router.navigate(['/admin/alumno']);
  }
}
