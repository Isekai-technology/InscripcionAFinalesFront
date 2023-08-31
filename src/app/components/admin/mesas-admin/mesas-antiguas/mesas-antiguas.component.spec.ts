import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasAntiguasComponent } from './mesas-antiguas.component';

describe('MesasAntiguasComponent', () => {
  let component: MesasAntiguasComponent;
  let fixture: ComponentFixture<MesasAntiguasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesasAntiguasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesasAntiguasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
