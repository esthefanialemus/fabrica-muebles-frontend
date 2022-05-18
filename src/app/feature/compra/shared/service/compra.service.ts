import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpService } from '@core-service/http.service';
import { Compra } from '../model/compra';

@Injectable()
export class CompraService {

  constructor(protected http: HttpService) {}

  public consultar() {

     return this.http.doGet<Compra[]>(`${environment.endpoint}/compra`, this.http.optsName('consultar compras'));
   }

   public guardar(compra: Compra) {
     return this.http.doPost<Compra, boolean>(`${environment.endpoint}/compra`, compra,
                                                 this.http.optsName('crear/actualizar compras'));
   }

   public eliminar(compra: Compra) {
     return this.http.doDelete<boolean>(`${environment.endpoint}/producto/${compra.id}`,
                                                  this.http.optsName('eliminar compras'));
   }
}
