import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsCompraComponent } from './components/items-compra/items-compra.component';

const routes: Routes = [{ path: '', component: ItemsCompraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsCompraRoutingModule { }
