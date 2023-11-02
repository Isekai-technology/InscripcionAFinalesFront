import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modificar-planes-dialog-form',
  templateUrl: './modificar-planes-dialog-form.component.html',
  styleUrls: ['./modificar-planes-dialog-form.component.scss']
})
export class ModificarPlanesDialogFormComponent implements OnInit {
  materiasSeleccionadas: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public datos: any) {}

  ngOnInit() {
    this.materiasSeleccionadas = [...this.datos.materias];
  }
}
