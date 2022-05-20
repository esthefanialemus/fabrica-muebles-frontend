import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CrearCompraComponent } from './crear-compra.component';
import { CompraService } from './../../shared/service/compra.service';

import {  HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('CrearCompraComponent', () => {
  let service: CompraService;
  let component : CrearCompraComponent;
  let fixture: ComponentFixture<CrearCompraComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCompraComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [CompraService, HttpService],

    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompraComponent);
    component = fixture.componentInstance;
    service= TestBed.inject(CompraService);
    spyOn(service, 'guardar').and.returnValue(of(null));

    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });


  it('deberia crear una compra', async () => {
    component.compraForm.controls.numeroPuesto.setValue('4 Puestos');
    component.compraForm.controls.tipoComedor.setValue('Vidrio');

    expect( component.compraForm.controls.valid).toBeTruthy();



  });
});

