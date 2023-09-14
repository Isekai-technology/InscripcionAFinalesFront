import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPlanComponent } from './cargar-plan.component';

describe('CargarPlanComponent', () => {
  let component: CargarPlanComponent;
  let fixture: ComponentFixture<CargarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
