import { TestBed } from '@angular/core/testing';

import { AdminMateriasService } from './admin-materias.service';

describe('AdminMateriasService', () => {
  let service: AdminMateriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMateriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
