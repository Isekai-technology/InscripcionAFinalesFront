import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarMateriasDialogFormComponent } from './cargar-materias-dialog-form.component';

describe('CargarMateriasDialogFormComponent', () => {
  let component: CargarMateriasDialogFormComponent;
  let fixture: ComponentFixture<CargarMateriasDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarMateriasDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarMateriasDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
