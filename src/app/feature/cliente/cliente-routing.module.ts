import { EliminarClienteComponent } from './components/eliminar-cliente/eliminar-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  {
     path: '', component: ClienteComponent ,

     children:[
       {
         path: 'crear',
         component:CrearClienteComponent
       },
       {
         path: 'listar',
         component: ListarClienteComponent

       },
       {
         path:'borrar',
         component:EliminarClienteComponent
       }
     ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
