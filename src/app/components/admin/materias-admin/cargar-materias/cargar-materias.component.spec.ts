import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CargarMateriasComponent } from './cargar-materias.component';

describe('MateriasDashboardComponent', () => {
  let component: CargarMateriasComponent;
  let fixture: ComponentFixture<CargarMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CargarMateriasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
