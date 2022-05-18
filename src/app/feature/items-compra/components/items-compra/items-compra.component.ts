import { Compra } from './../../../compra/shared/model/compra';
import { CarritoService } from './../../shared/service/carrito-compra.service';
import { ItemsCompraService } from './../../shared/service/items-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-compra',
  templateUrl: './items-compra.component.html',
  styleUrls: ['./items-compra.component.css']
})
export class ItemsCompraComponent implements OnInit {



  public listaCompra: Compra[] = [];


  constructor(protected itemsCompraService: ItemsCompraService, protected carritoService: CarritoService) { }



  ngOnInit(): void {

    this.obtenerListaCompra();


  }

  public encabezadoTabla: string[] = ['Valor'];
  private obtenerListaCompra() {
    this.carritoService.getlistaCompra().subscribe(data => {
      this.listaCompra = data;
      console.log(this.listaCompra);
      this.recorrerLista(this.listaCompra);

    });
  }


  private recorrerLista (listaC: Compra[]){

    listaC.forEach(function (value) {
      console.log(value);
  });
  }
}
