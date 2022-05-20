import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../shared/service/compra.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Producto } from '@producto/shared/model/producto';
import { ProductoService } from '@producto/shared/service/producto.service';



@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.css']
})
export class CrearCompraComponent implements OnInit {


  compraForm: FormGroup;

  public listaProductos: Observable<Producto[]>;

  constructor(protected CompraService: CompraService, protected productoService: ProductoService) { }

  ngOnInit() {

    this.listaProductos = this.productoService.consultar();

    this.construirFormularioCompra();


  }





  crear() {
    this.CompraService.guardar(this.compraForm.value).subscribe(()=>{







    });
  }



  private construirFormularioCompra() {

    this.compraForm = new FormGroup({

      numeroPuesto: new FormControl('', [Validators.required]),
      tipoComedor: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required])

    });
  }

}
