import { ClienteService } from './shared/service/cliente.service';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { EliminarClienteComponent } from './components/eliminar-cliente/eliminar-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClienteComponent,
    ListarClienteComponent,
    EliminarClienteComponent,
    CrearClienteComponent ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers:[
    ClienteService
  ]
})
export class ClienteModule { }
