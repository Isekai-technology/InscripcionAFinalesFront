import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPlanesDialogFormComponent } from './modificar-planes-dialog-form.component';

describe('ModificarPlanesDialogFormComponent', () => {
  let component: ModificarPlanesDialogFormComponent;
  let fixture: ComponentFixture<ModificarPlanesDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPlanesDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPlanesDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
