import { HttpService } from './../../../../core/services/http.service';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductoService } from './../../shared/service/producto.service';
import { HttpResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';



describe('ListarProductoComponent', () => {
  let httpMock: HttpTestingController;
  let service: ProductoService;
  const apiEndpointProductoConsulta = `${environment.endpoint}/producto`;



  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProductoService);
  });

  it('should create', () => {
    const listarCliente: ProductoService = TestBed.inject(ProductoService);
    expect(listarCliente).toBeTruthy();
  });

  fit('deberia listar productos', () => {
    service.consultar().subscribe((respuesta) => {
      expect(respuesta).toBeTruthy();
    });
    const req = httpMock.expectOne(apiEndpointProductoConsulta);
    expect(req.request.method).toBe('GET');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});


