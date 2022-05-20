import { Compra } from 'src/app/feature/compra/shared/model/compra';
import { CarritoService } from './../../shared/service/carrito-compra.service';
import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/feature/compra/shared/service/compra.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-compra',
  templateUrl: './items-compra.component.html',
  styleUrls: ['./items-compra.component.css']
})
export class ItemsCompraComponent implements OnInit {

  public productos: any[];
  public totalPagar = 0;
  public idCliente = 0;

  public encabezadoTabla: string[] = ['tipo Comedor', 'Valor'];

  constructor(protected compraService: CompraService, protected carritoService: CarritoService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerListaCompra();
    this.router.paramMap.subscribe((data) => {
      this.idCliente = +data.get('id');

    });

  }
  private obtenerListaCompra() {
    this.productos = JSON.parse(this.carritoService.obtenerCambioProducto());
    this.calcularTotal();
  }

  public guardarItemCompra() {
    const compra = new Compra(this.idCliente, this.totalPagar);
    this.compraService.guardar(compra).subscribe(data => {
      console.log(data);
    })
    console.log(this.productos);

  }

  private calcularTotal() {
   // this.productos.forEach(producto => {
     // this.totalPagar += producto.valor;
    //});
  }
}
