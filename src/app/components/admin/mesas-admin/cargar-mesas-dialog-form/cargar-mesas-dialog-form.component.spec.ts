import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarMesasDialogFormComponent } from './cargar-mesas-dialog-form.component';

describe('CargarMesasDialogFormComponent', () => {
  let component: CargarMesasDialogFormComponent;
  let fixture: ComponentFixture<CargarMesasDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarMesasDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarMesasDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
