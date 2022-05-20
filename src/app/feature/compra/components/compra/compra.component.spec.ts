import { Compra } from 'src/app/feature/compra/shared/model/compra';
import { HttpService } from '@core-service/http.service';
import { CompraService } from 'src/app/feature/compra/shared/service/compra.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {  HttpResponse } from '@angular/common/http';
import {  TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

describe('CompraComponent', () => {
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
    const dummyCompra = new Compra(1,1300000,'2022-06-13 10:22:33','2022-06-16 10:22:33','2022-06-20 10:22:33',1);
    service.guardar(dummyCompra).subscribe((respuesta) => {
      expect(respuesta).toBeTruthy();
    });
    const req = httpMock.expectOne(apiEndpointCompra);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
