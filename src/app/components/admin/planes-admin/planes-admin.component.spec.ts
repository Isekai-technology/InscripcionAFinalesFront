import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesAdminComponent } from './planes-admin.component';

describe('PlanesAdminComponent', () => {
  let component: PlanesAdminComponent;
  let fixture: ComponentFixture<PlanesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
