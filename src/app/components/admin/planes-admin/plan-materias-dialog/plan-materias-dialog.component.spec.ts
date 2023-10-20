import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMateriasDialogComponent } from './plan-materias-dialog.component';

describe('PlanMateriasDialogComponent', () => {
  let component: PlanMateriasDialogComponent;
  let fixture: ComponentFixture<PlanMateriasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMateriasDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanMateriasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
