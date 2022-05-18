import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'cliente', loadChildren: () => import('./feature/cliente/cliente.module').then(m => m.ClienteModule) },
  { path: 'compra/:id', loadChildren: () => import('./feature/compra/compra.module').then(m => m.CompraModule) },
  { path: 'itemsCompra/:id', loadChildren: () => import('./feature/items-compra/items-compra.module').then(m => m.ItemsCompraModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
