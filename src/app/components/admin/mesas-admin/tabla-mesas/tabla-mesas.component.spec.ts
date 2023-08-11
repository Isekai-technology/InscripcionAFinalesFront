import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMesasComponent } from './tabla-mesas.component';

describe('TablaMesasComponent', () => {
  let component: TablaMesasComponent;
  let fixture: ComponentFixture<TablaMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMesasComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
