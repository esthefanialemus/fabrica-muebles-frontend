import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;
  public numeroPuesto: number;
  public tipoComedor: number;
  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    let date = new Date();
    console.log(date.toISOString());

    this.construirFormularioProducto();
    this.numeroPuesto = 0;
    this.tipoComedor = 0;

  }

  onChange() {


    if (this.productoForm.value.tipoComedor == 'Vidrio' && this.productoForm.value.numeroPuesto == '4 Puestos') {
      this.productoForm.setValue({ ...this.productoForm.value, valor: 400000 });
    }

    if (this.productoForm.value.tipoComedor == 'Vidrio' && this.productoForm.value.numeroPuesto == '6 Puestos') {
      this.productoForm.setValue({ ...this.productoForm.value, valor: 600000 });

    }

    if (this.productoForm.value.tipoComedor == 'Vidrio' && this.productoForm.value.numeroPuesto == '8 Puestos') {
      this.productoForm.setValue({ ...this.productoForm.value, valor: 900000 });

    }

    if (this.productoForm.value.tipoComedor == 'Madera' && this.productoForm.value.numeroPuesto == '4 Puestos') {
      this.productoForm.setValue({ ...this.productoForm.value, valor: 900000 });

    }

    if (this.productoForm.value.tipoComedor == 'Madera' && this.productoForm.value.numeroPuesto == '6 Puestos') {
      this.productoForm.setValue({ ...this.productoForm.value, valor: 1200000 });

    }

    if (this.productoForm.value.tipoComedor == 'Madera' && this.productoForm.value.numeroPuesto == '8 Puestos') {
      this.productoForm.setValue({ ...this.productoForm.value, valor: 2400000 });

    }

    if (this.productoForm.value.tipoComedor == 'Tapizado' && this.productoForm.value.numeroPuesto == '4 Puestos') {
      this.productoForm.setValue({ ...this.productoForm.value, valor: 800000 });

    }

    if (this.productoForm.value.tipoComedor == 'Tapizado' && this.productoForm.value.numeroPuesto == '6 Puestos') {
      this.productoForm.setValue({ ...this.productoForm.value, valor: 150000 });

    }

    if (this.productoForm.value.tipoComedor == 'Tapizado' && this.productoForm.value.numeroPuesto == '8 Puestos') {
      this.productoForm.setValue({ ...this.productoForm.value, valor: 290000 });

    }



  }



  crear() {
    this.productoServices.guardar(this.productoForm.value).subscribe(() => {

      console.log(this.numeroPuesto);





    });
  }



  private construirFormularioProducto() {

    this.productoForm = new FormGroup({

      numeroPuesto: new FormControl('', [Validators.required]),
      tipoComedor: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required])

    });
  }

}
