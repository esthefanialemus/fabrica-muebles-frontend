import { CarritoService } from './../../../items-compra/shared/service/carrito-compra.service';
import { ProductoService } from './../../../producto/shared/service/producto.service';
import { HttpService } from '@core-service/http.service';
import { CompraService } from 'src/app/feature/compra/shared/service/compra.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CompraComponent } from './compra.component';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

describe('CompraComponent', () => {
  let component: CompraComponent;
  let fixture: ComponentFixture<CompraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers:[
        CompraService,
        HttpService,
        ProductoService,
        CarritoService

      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(CompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    TestBed.inject(CompraService);
    expect(component).toBeTruthy();
  });


});
