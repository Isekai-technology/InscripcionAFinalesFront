import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasAntiguasAlumnosComponent } from './mesas-antiguas-alumnos.component';

describe('MesasAntiguasAlumnosComponent', () => {
  let component: MesasAntiguasAlumnosComponent;
  let fixture: ComponentFixture<MesasAntiguasAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesasAntiguasAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesasAntiguasAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
