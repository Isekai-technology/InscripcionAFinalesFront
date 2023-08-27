import { TestBed } from '@angular/core/testing';

import { AdminMesasService } from './admin-mesas.service';

describe('AdminMesasService', () => {
  let service: AdminMesasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMesasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
