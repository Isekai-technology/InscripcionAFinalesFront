import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
export interface User {
  name: string;
}
@Component({
  selector: 'app-cargar-materias-dialog-form',
  templateUrl: './cargar-materias-dialog-form.component.html',
  styleUrls: ['./cargar-materias-dialog-form.component.scss']
})
export class CargarMateriasDialogFormComponent implements OnInit{
  correlativas = new FormControl('');
  correlativaslist: string[] = ['Mate', 'ingles', 'program'];
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]> | undefined;

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
}
