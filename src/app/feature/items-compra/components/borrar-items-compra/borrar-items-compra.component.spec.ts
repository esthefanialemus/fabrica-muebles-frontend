import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarItemsCompraComponent } from './borrar-items-compra.component';

describe('BorrarItemsCompraComponent', () => {
  let component: BorrarItemsCompraComponent;
  let fixture: ComponentFixture<BorrarItemsCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarItemsCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarItemsCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
