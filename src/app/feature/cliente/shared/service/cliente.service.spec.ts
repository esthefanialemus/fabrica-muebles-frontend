import { Cliente } from './../model/cliente';
import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { environment } from 'src/environments/environment';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '@core/services/http.service';
import { HttpResponse } from '@angular/common/http';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpMock: HttpTestingController;

  const apiEndpointClientes = `${environment.endpoint}/cliente`;


  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar clientes', () => {
    const dummyClientes = [
      new Cliente('Cata','Delgado','12345','c@gmail.com',1),
      new Cliente('Lina','Delgado','875','l@gmail.com',1)
    ];
    service.consultar().subscribe(clientes => {
      expect(clientes.length).toBe(2);
      expect(clientes).toEqual(dummyClientes);
    });
    const req = httpMock.expectOne(apiEndpointClientes);
    expect(req.request.method).toBe('GET');
    req.flush(dummyClientes);
  });

  it('deberia crear un cliente', () => {
    const dummyCliente =new  Cliente('Cata','Delgado','12345','c@gmail.com',1);

    service.guardar(dummyCliente).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointClientes);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un cliente', () => {
    const dummyCliente =new  Cliente('Cata','Delgado','12345','c@gmail.com',1);
    service.eliminar(dummyCliente).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointClientes}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
