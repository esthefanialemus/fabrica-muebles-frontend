import { ItemsCompra } from './../model/items-compra';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

import { HttpResponse } from '@angular/common/http';
import { ItemsCompraService } from './items-compra.service';

describe('ItemsCompraService', () => {
  let service: ItemsCompraService;
 let httpMock: HttpTestingController;
 const apiEndpointItemsCompras = `${environment.endpoint}/itemsCompra`;



  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemsCompraService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ItemsCompraService);
  });

  it('Deberia guardar itemsCompras', () => {
    let listaItemsCompra= new ItemsCompra(1,1,1,1);

    service.guardar(listaItemsCompra).subscribe(item =>{
      expect(item).toEqual(true);
    })
  });

  it('Deberia listar itemscompras', () => {

    const dummyCompras: ItemsCompra[]=[
      {
        cantidad:1,
        idProducto:1,
        idCompra: 1,
        id:1

      }
    ];

    service.consultar().subscribe(item =>{
      expect(item.length).toBe(1);
      expect(item).toEqual(dummyCompras);
    })

    const req = httpMock.expectOne(apiEndpointItemsCompras);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCompras);
  });

  it('deberia eliminar una compra', () => {
    let compra= new ItemsCompra(1,1,1,1);

    service.eliminar(compra).subscribe(respuesta => {
      expect(respuesta).toEqual(null);
    });
    const req = httpMock.expectOne(`${apiEndpointItemsCompras}/${compra.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<any>());
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
