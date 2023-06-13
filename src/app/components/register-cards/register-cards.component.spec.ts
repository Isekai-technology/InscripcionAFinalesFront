import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCardsComponent } from './register-cards.component';

describe('RegisterCardsComponent', () => {
  let component: RegisterCardsComponent;
  let fixture: ComponentFixture<RegisterCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
