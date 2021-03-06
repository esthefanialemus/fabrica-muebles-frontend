
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearProductoComponent } from './crear-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearProductoComponent', () => {
  let component: CrearProductoComponent;
  let fixture: ComponentFixture<CrearProductoComponent>;
  let productoService: ProductoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProductoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ProductoService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.productoForm.valid).toBeFalsy();
  });

  it('Registrando producto', () => {

    component.productoForm.controls.numeroPuesto.setValue('4 Puestos');
    component.productoForm.controls.tipoComedor.setValue('Vidrio');
    component.productoForm.controls.valor.setValue(400000);
    component.crear();
    expect(component.productoForm.valid).toBeTruthy();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('onChange conditional vidrio 4 puestos', () => {

    component.productoForm.controls.numeroPuesto.setValue('4 Puestos');
    component.productoForm.controls.tipoComedor.setValue('Vidrio');
    component.onChange();
    expect(component.productoForm.value.valor).toEqual(400000);

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('onChange conditional vidrio 6 puestos', () => {

    component.productoForm.controls.numeroPuesto.setValue('6 Puestos');
    component.productoForm.controls.tipoComedor.setValue('Vidrio');
    component.onChange();
    expect(component.productoForm.value.valor).toEqual(600000);

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('onChange conditional vidrio 8 puestos', () => {

    component.productoForm.controls.numeroPuesto.setValue('8 Puestos');
    component.productoForm.controls.tipoComedor.setValue('Vidrio');
    component.onChange();
    expect(component.productoForm.value.valor).toEqual(900000);

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('onChange conditional Madera 4 puestos', () => {

    component.productoForm.controls.numeroPuesto.setValue('4 Puestos');
    component.productoForm.controls.tipoComedor.setValue('Madera');
    component.onChange();
    expect(component.productoForm.value.valor).toEqual(900000);

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('onChange conditional Madera 6 puestos', () => {

    component.productoForm.controls.numeroPuesto.setValue('6 Puestos');
    component.productoForm.controls.tipoComedor.setValue('Madera');
    component.onChange();
    expect(component.productoForm.value.valor).toEqual(1200000);

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('onChange conditional Madera 8 puestos', () => {

    component.productoForm.controls.numeroPuesto.setValue('8 Puestos');
    component.productoForm.controls.tipoComedor.setValue('Madera');
    component.onChange();
    expect(component.productoForm.value.valor).toEqual(2400000);

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('onChange conditional Tapizado 4 puestos', () => {

    component.productoForm.controls.numeroPuesto.setValue('4 Puestos');
    component.productoForm.controls.tipoComedor.setValue('Tapizado');
    component.onChange();
    expect(component.productoForm.value.valor).toEqual(800000);

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });


  it('onChange conditional Tapizado 6 puestos', () => {

    component.productoForm.controls.numeroPuesto.setValue('6 Puestos');
    component.productoForm.controls.tipoComedor.setValue('Tapizado');
    component.onChange();
    expect(component.productoForm.value.valor).toEqual(150000);

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

  it('onChange conditional Tapizado 8 puestos', () => {

    component.productoForm.controls.numeroPuesto.setValue('8 Puestos');
    component.productoForm.controls.tipoComedor.setValue('Tapizado');
    component.onChange();
    expect(component.productoForm.value.valor).toEqual(290000);

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});

