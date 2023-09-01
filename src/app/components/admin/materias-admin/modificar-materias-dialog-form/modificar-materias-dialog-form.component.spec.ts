import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMateriasDialogFormComponent } from './modificar-materias-dialog-form.component';

describe('ModificarMateriasDialogFormComponent', () => {
  let component: ModificarMateriasDialogFormComponent;
  let fixture: ComponentFixture<ModificarMateriasDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarMateriasDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarMateriasDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
