import { CarritoService } from './../../../items-compra/shared/service/carrito-compra.service';
import { Compra } from './../../shared/model/compra';
import { Producto } from './../../../producto/shared/model/producto';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '@producto/shared/service/producto.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  compraForm: FormGroup;
  public listaProductos: Observable<Producto[]>;
  public idCliente: number;

  public listaCarrito: Compra[] =[];

  public pruebaMela: Compra[] = [];

  constructor(protected productoService: ProductoService,private router: ActivatedRoute, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((data)=>{

      this.idCliente=+data.get('id');

    });
    this.listaProductos = this.productoService.consultar();
  }

  public enviarLista (){
    this.carritoService.setlistaCompra(this.listaCarrito);

  }

  public agregarAlCarrito (compra: Compra){

    this.listaCarrito.push(compra)



  }

  public obtenerListaCompra() {
    this.carritoService.getlistaCompra().subscribe(data => {
      this.pruebaMela = data;
      console.log(this.pruebaMela);


    });
  }

}
