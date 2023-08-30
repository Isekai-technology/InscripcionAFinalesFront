import { Component } from '@angular/core';

@Component({
  selector: 'app-cargar-plan-dialog-form',
  templateUrl: './cargar-plan-dialog-form.component.html',
  styleUrls: ['./cargar-plan-dialog-form.component.scss']
})
export class CargarPlanDialogFormComponent {
  //placeholder
  materiasPubli: string[] = ["Colores 1", 'Creatividad', "Marketing"];
  materiasAnalista: string[] = ["Analisis 1", "Algebra", "Algoritmos 1"];

  
}
