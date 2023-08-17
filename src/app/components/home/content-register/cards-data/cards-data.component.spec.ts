import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDataComponent } from './cards-data.component';

describe('CardsDataComponent', () => {
  let component: CardsDataComponent;
  let fixture: ComponentFixture<CardsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
