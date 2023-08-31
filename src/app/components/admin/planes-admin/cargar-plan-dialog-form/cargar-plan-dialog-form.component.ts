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

  carreraSeleccionada: string = "";
  materiasSelector: string[] = [];
  materiasSeleccionadas: string[] = [];

  cambiarCarrera(){
    this.materiasSeleccionadas.splice(0); //borra los elementos en el array
    if (this.carreraSeleccionada == "analista")
      this.materiasSelector= this.materiasAnalista;
    else
      this.materiasSelector= this.materiasPubli;
  }
}
