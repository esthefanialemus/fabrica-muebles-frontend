import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from './../../shared/service/carrito-compra.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ItemsCompraService } from './../../shared/service/items-compra.service';
import { HttpService } from './../../../../core/services/http.service';
import { CompraService } from './../../../compra/shared/service/compra.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCompraComponent } from './items-compra.component';

describe('ItemsCompraComponent', () => {
  let component: ItemsCompraComponent;
  let fixture: ComponentFixture<ItemsCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      declarations: [ ItemsCompraComponent ],
      providers :[CompraService, HttpService, ItemsCompraService , CarritoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsCompraComponent);
    component = fixture.componentInstance;
    TestBed.inject(CompraService);
    TestBed.inject(ItemsCompraService);
    TestBed.inject(CarritoService);
    TestBed.inject(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
