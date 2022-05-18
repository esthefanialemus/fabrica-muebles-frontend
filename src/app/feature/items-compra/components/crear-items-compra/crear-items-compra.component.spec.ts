import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearItemsCompraComponent } from './crear-items-compra.component';

describe('CrearItemsCompraComponent', () => {
  let component: CrearItemsCompraComponent;
  let fixture: ComponentFixture<CrearItemsCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearItemsCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearItemsCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
