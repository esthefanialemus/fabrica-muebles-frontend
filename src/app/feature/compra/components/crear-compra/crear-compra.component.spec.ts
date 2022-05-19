import { CompraService } from './../../shared/service/compra.service';
import { Compra } from './../../shared/model/compra';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {  TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';

describe('CrearCompraComponent', () => {
  let httpMock: HttpTestingController;
  let service: CompraService;
  const apiEndpointCompra = `${environment.endpoint}/compra`;



  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompraService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CompraService);
  });

  it('should create', () => {
    const crearCompra: CompraService = TestBed.inject(CompraService);
    expect(crearCompra).toBeTruthy();
  });


  it('deberia crear una compra', () => {
    const dummyCompra = new Compra(1,900000,'2022-05-16T10:12:43.411','2022-05-19T10:12:43.411','2022-05-22T10:12:43.411');
    service.guardar(dummyCompra).subscribe((respuesta) => {
      expect(respuesta).toBeTruthy();
    });
    const req = httpMock.expectOne(apiEndpointCompra);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});

