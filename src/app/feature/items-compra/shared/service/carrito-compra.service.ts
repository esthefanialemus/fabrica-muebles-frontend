import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Subject } from 'rxjs';
import { Compra } from 'src/app/feature/compra/shared/model/compra';

@Injectable()
export class CarritoService {

  private listaCompra = new Subject<Compra[]>();
  constructor(protected http: HttpService) {}

  getlistaCompra() {
    return this.listaCompra.asObservable();
  }

  setlistaCompra(lista: Compra[]) {
    this.listaCompra.next(lista);
  }

}
