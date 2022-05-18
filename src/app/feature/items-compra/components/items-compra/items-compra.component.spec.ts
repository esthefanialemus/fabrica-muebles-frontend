import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCompraComponent } from './items-compra.component';

describe('ItemsCompraComponent', () => {
  let component: ItemsCompraComponent;
  let fixture: ComponentFixture<ItemsCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
