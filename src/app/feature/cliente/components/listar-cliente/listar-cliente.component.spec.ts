import { ClienteService } from './../../shared/service/cliente.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {  TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpService } from '@core/services/http.service';
import { HttpResponse } from '@angular/common/http';

describe('ListarClienteComponent', () => {
  let httpMock: HttpTestingController;
  let service: ClienteService;
  const apiEndpointClienteConsulta = `${environment.endpoint}/cliente`;



  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ClienteService);
  });

  it('should create', () => {
    const listarCliente: ClienteService = TestBed.inject(ClienteService);
    expect(listarCliente).toBeTruthy();
  });


  it('deberia listar un cliente', () => {
    service.consultar().subscribe((respuesta) => {
      expect(respuesta).toBeTruthy();
    });
    const req = httpMock.expectOne(apiEndpointClienteConsulta);
    expect(req.request.method).toBe('GET');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
