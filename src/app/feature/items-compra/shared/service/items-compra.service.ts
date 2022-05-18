import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { ItemsCompra } from '../model/items-compra';
@Injectable()
export class ItemsCompraService {

  constructor(protected http: HttpService) {}

  public consultar() {

     return this.http.doGet<ItemsCompra[]>(`${environment.endpoint}/itemsCompra`, this.http.optsName('consultar items de compra'));
   }

   public guardar(itemsCompra: ItemsCompra) {
     return this.http.doPost<ItemsCompra, boolean>(`${environment.endpoint}/itemsCompra`, itemsCompra,
                                                 this.http.optsName('crear/actualizar itemsCompra'));
   }

   public eliminar(itemsCompra: ItemsCompra) {
     return this.http.doDelete<boolean>(`${environment.endpoint}/itemsCompra/${itemsCompra.id}`,
                                                  this.http.optsName('eliminar itemsCompra'));
   }

   public consultarItemsComprasDao(itemsCompra: ItemsCompra) {

    return this.http.doGet<ItemsCompra[]>(`${environment.endpoint}/itemsCompra/daoItemsCompra/${itemsCompra.id}`, this.http.optsName('consultar items de compra'));
  }

  public consultarItemsComprasSinCompraDao(itemsCompra: ItemsCompra) {

    return this.http.doGet<ItemsCompra[]>(`${environment.endpoint}/itemsCompra/daoItemsCompraSinCompra/${itemsCompra.id}`, this.http.optsName('consultar items de compra'));
  }
}
