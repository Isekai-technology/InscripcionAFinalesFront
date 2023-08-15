import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cargar-materias-dialog-form',
  templateUrl: './cargar-materias-dialog-form.component.html',
  styleUrls: ['./cargar-materias-dialog-form.component.scss']
})
export class CargarMateriasDialogFormComponent {
  regularizadas = new FormControl('');
  aprobadas = new FormControl('');
  regularizadaslist: string[] = ['Mate', 'ingles', 'program'];
  aprobadaslist = this.regularizadaslist;
}
