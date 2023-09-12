import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresCardComponent } from './profesores-card.component';

describe('ProfesoresCardComponent', () => {
  let component: ProfesoresCardComponent;
  let fixture: ComponentFixture<ProfesoresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesoresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
