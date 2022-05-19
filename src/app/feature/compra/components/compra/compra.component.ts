import { CarritoService } from './../../../items-compra/shared/service/carrito-compra.service';
import { Producto } from './../../../producto/shared/model/producto';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '@producto/shared/service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  compraForm: FormGroup;
  public listaProductos: Observable<Producto[]>;
  public idCliente: number;

  public listaCarrito: Producto[] =[];

  constructor(
    protected productoService: ProductoService,
    private router: ActivatedRoute,
    private ro:Router,
    private carritoService: CarritoService
    ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((data)=>{

      this.idCliente=+data.get('id');

    });
    this.listaProductos = this.productoService.consultar();
  }

  public enviarLista (){
    this.carritoService.enviarCambioProducto(this.listaCarrito);
    this.ro.navigate(['/itemsCompra',this.idCliente])

  }

  public agregarAlCarrito (producto: Producto){
    this.listaCarrito.push(producto)
  }
}
