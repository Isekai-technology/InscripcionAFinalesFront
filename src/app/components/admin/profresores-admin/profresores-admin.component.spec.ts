import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfresoresAdminComponent } from './profresores-admin.component';

describe('ProfresoresAdminComponent', () => {
  let component: ProfresoresAdminComponent;
  let fixture: ComponentFixture<ProfresoresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfresoresAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfresoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
