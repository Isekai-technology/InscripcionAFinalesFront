import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasAdminComponent } from './materias-admin.component';

describe('MateriasAdminComponent', () => {
  let component: MateriasAdminComponent;
  let fixture: ComponentFixture<MateriasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
