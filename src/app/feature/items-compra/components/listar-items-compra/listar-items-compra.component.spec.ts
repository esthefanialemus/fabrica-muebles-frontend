import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItemsCompraComponent } from './listar-items-compra.component';

describe('ListarItemsCompraComponent', () => {
  let component: ListarItemsCompraComponent;
  let fixture: ComponentFixture<ListarItemsCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarItemsCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItemsCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
