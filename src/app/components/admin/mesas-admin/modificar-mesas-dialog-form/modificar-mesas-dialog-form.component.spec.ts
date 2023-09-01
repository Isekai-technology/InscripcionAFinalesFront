import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMesasDialogFormComponent } from './modificar-mesas-dialog-form.component';

describe('ModificarMesasDialogFormComponent', () => {
  let component: ModificarMesasDialogFormComponent;
  let fixture: ComponentFixture<ModificarMesasDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarMesasDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarMesasDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
