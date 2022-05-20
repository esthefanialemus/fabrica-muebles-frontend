import { Compra } from 'src/app/feature/compra/shared/model/compra';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

import { CompraService } from './compra.service';
import { HttpResponse } from '@angular/common/http';

describe('CompraService', () => {
  let service: CompraService;
  let httpMock: HttpTestingController;
  const apiEndpointCompras = `${environment.endpoint}/compra`;



  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompraService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CompraService);
  });

  it('Deberia guardar compras', () => {
    let listaCompra= new Compra(1,1000,undefined,undefined,undefined,undefined);

    service.guardar(listaCompra).subscribe(compra =>{
      expect(compra).toEqual(true);
    })
  });

  it('Deberia listar compras', () => {

    const listaCompras: Compra[]=[
      {
        idCliente:1,
        total:1000000,
        fechaCompra: '2022-04-10 20:22:33',
        fechaDespacho: '2022-04-13 20:22:33',
        fechaEntrega: '2022-04-16 20:22:33',
        id:1

      }
    ];

    service.consultar().subscribe(compra =>{
      expect(compra.length).toBe(1);
      expect(compra).toEqual(listaCompras);
    })

    const req = httpMock.expectOne(apiEndpointCompras);
    expect(req.request.method).toBe('GET');
    req.flush(listaCompras);
  });

  it('deberia eliminar una compra', () => {
    let compra= new Compra(1,1000,undefined,undefined,undefined,undefined);

    service.eliminar(compra).subscribe(respuesta => {
      expect(respuesta).toEqual(null);
    });
    const req = httpMock.expectOne(`${apiEndpointCompras}/${compra.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<any>());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
