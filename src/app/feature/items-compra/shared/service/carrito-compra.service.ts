import { Producto } from './../../../producto/shared/model/producto';
import { Injectable } from '@angular/core';

@Injectable()
export class CarritoService {

  constructor() {}

  public obtenerCambioProducto() : any {
    const productos = localStorage.getItem('data');
    return productos;
  }

  public enviarCambioProducto(lista: Producto[]) {
    localStorage.setItem('data', JSON.stringify(lista));
  }
}
