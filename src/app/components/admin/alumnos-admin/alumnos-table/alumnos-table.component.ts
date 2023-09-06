import { Component, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CargarAlumnosComponent } from '../cargar-alumnos/cargar-alumnos.component';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

export interface AlumnoData{
  id:number,
  nombre:string,
  apellido:string,
  DNI: number,
  carrera: string,
  curso:string,
  materias: string[],
}

export interface Curso {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subCursos?: any[];
}

let alumnos: AlumnoData[] = [
  {
    id:1,
    nombre:"SEDG",
    apellido:"BD",
    DNI: 543223151,
    carrera: "Analista",
    curso:'Primero',
    materias: [
      'gfdsfafas','fgdsagdsa','gfasdgafs'
    ],
  },
  {
    id:2,
    nombre:"NUTDR",
    apellido:"NMUYF",
    DNI: 215312632,
    carrera: "Publicidad",
    curso:'Primero',
    materias: [
      'unte','awqa','bnnut'
    ],
  },
  {
    id:3,
    nombre:"QWFASD",
    apellido:"TYMT",
    DNI: 654354254,
    carrera: "Analista",
    curso:'Tercero',
    materias: [
      'ceett','fgdsagdsa','gfasdgafs'
    ],
  },
  {
    id:4,
    nombre:"PUIHJ",
    apellido:"CQWQ",
    DNI: 87654312,
    carrera: "Publicidad",
    curso:'Segundo',
    materias: [
      'unte','biu7y','bnnut'
    ],
  }
]

export interface User {
  name: string;
}


@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.scss']
})
export class AlumnosTableComponent {
  displayedColumns: string[] = ['id', 'nombre', 'apellido','DNI', 'carrera', 'curso'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<AlumnoData>;
  array:any=[];
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]> | undefined;

  constructor(private router: Router,private dialog : MatDialog) {
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
        this.array.filter((item: AlumnoData) => this.selectedCursos.includes(item.curso))
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

  updateTableDataSource(filteredArray: AlumnoData[]) {
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

  clickedRows(row:any){
    this.router.navigate(['/admin/alumno']);
  }
}
