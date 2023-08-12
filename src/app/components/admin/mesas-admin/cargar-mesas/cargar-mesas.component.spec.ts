import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CargarMesasComponent } from './cargar-mesas.component';

describe('CargarMesasComponent', () => {
  let component: CargarMesasComponent;
  let fixture: ComponentFixture<CargarMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CargarMesasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
