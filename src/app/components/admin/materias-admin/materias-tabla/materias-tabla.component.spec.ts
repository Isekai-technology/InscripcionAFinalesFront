import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasTablaComponent } from './materias-tabla.component';

describe('MateriasTablaComponent', () => {
  let component: MateriasTablaComponent;
  let fixture: ComponentFixture<MateriasTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
