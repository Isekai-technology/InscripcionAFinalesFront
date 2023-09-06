import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPlanDialogFormComponent } from './cargar-plan-dialog-form.component';

describe('CargarPlanDialogFormComponent', () => {
  let component: CargarPlanDialogFormComponent;
  let fixture: ComponentFixture<CargarPlanDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarPlanDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarPlanDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
