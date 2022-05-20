import { Cliente } from './../../shared/model/cliente';
import { HttpService } from '@core-service/http.service';
import { ClienteService } from './../../shared/service/cliente.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {  TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '@angular/common/http';


describe('ClienteComponent', () => {
  let httpMock: HttpTestingController;
  let service: ClienteService;
  const apiEndpointCliente = `${environment.endpoint}/cliente`;


  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ClienteService);
  });

  it('should create', () => {
    const crearCliente: ClienteService = TestBed.inject(ClienteService);
    expect(crearCliente).toBeTruthy();
  });

  it('deberia crear un cliente', () => {
    const dummyCliente = new Cliente('Sofia','Lemus','42485','s@gmail.com',1);
    service.guardar(dummyCliente).subscribe((respuesta) => {
      expect(respuesta).toBeTruthy();
    });
    const req = httpMock.expectOne(apiEndpointCliente);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
