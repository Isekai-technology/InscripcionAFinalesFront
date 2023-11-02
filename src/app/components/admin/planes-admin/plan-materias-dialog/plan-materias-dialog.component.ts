import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-plan-materias-dialog',
  template: `
    <div class="plan-materias-dialog">
      <h2>Materias del plan {{ data.nombrePlan }}</h2>
      <ul class="materias-list">
        <li class="materia-item" *ngFor="let materia of data.materias">{{ materia }}</li>
      </ul>
    </div>
  `,
})
export class PlanMateriasDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { materias: string[], nombrePlan: string }) {}
}
