import { TestBed } from '@angular/core/testing';

import { ItemsCompraService } from './items-compra.service';

describe('ItemsCompraService', () => {
  let service: ItemsCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
