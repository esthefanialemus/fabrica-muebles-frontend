import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from './components/compra/compra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CompraComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompraModule { }
