import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { Materia } from 'src/app/models/Materia';
export interface User {
  name: string;
}

@Component({
  selector: 'app-modificar-materias-dialog-form',
  templateUrl: './modificar-materias-dialog-form.component.html',
  styleUrls: ['./modificar-materias-dialog-form.component.scss']
})
export class ModificarMateriasDialogFormComponent implements OnInit {
  correlativas = new FormControl('');
  correlativaslist: string[] = ['Mate', 'ingles', 'program'];
  profesorControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}]; //placeholder a ser reemplazado por profesores
  filteredOptions: Observable<User[]> | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public datos: Materia) {
  }

  ngOnInit() {
    this.filteredOptions = this.profesorControl.valueChanges.pipe(
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
}
