import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCardsSubjectComponent } from './reg-cards-subject.component';

describe('RegCardsSubjectComponent', () => {
  let component: RegCardsSubjectComponent;
  let fixture: ComponentFixture<RegCardsSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegCardsSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegCardsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
