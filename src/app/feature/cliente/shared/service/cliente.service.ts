import { Cliente } from './../model/cliente';
import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) {}

  public consultar() {

     return this.http.doGet<Cliente[]>(`${environment.endpoint}/cliente`, this.http.optsName('consultar clientes'));
   }

   public guardar(cliente: Cliente) {
     console.log(cliente);

     return this.http.doPost<Cliente, boolean>(`${environment.endpoint}/cliente`, cliente,
                                                 this.http.optsName('crear/actualizar clientes'));
   }

   public eliminar(cliente: Cliente) {
     return this.http.doDelete<boolean>(`${environment.endpoint}/cliente/${cliente.id}`,
                                                  this.http.optsName('eliminar clientes'));
   }

}
