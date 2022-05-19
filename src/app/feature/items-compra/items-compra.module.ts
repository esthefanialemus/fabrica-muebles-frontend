import { ItemsCompraService } from './shared/service/items-compra.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsCompraRoutingModule } from './items-compra-routing.module';
import { ItemsCompraComponent } from './components/items-compra/items-compra.component';
import { CrearItemsCompraComponent } from './components/crear-items-compra/crear-items-compra.component';
import { ListarItemsCompraComponent } from './components/listar-items-compra/listar-items-compra.component';
import { BorrarItemsCompraComponent } from './components/borrar-items-compra/borrar-items-compra.component';
import { SharedModule } from '@shared/shared.module';
import { CompraService } from '../compra/shared/service/compra.service';


@NgModule({
  declarations: [
    ItemsCompraComponent,
    CrearItemsCompraComponent,
    ListarItemsCompraComponent,
    BorrarItemsCompraComponent
  ],
  imports: [
    CommonModule,
    ItemsCompraRoutingModule,
    SharedModule
  ],
  providers:[
    ItemsCompraService,CompraService
  ]
})
export class ItemsCompraModule { }
