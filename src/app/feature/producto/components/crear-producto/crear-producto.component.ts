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
    this.numeroPuesto=0;
    this.tipoComedor=0;

  }

onChange() {

  if(this.productoForm.value.tipoComedor==1 && this.productoForm.value.numeroPuesto==1  ){
    this.productoForm.setValue({...this.productoForm.value,valor:400000});
    console.log( this.productoForm.value);
  }

  if(this.productoForm.value.tipoComedor==1 && this.productoForm.value.numeroPuesto==2  ){
    this.productoForm.setValue({...this.productoForm.value,valor:600000});
    console.log( this.productoForm.value);
  }

  if(this.productoForm.value.tipoComedor==1 && this.productoForm.value.numeroPuesto==3  ){
    this.productoForm.setValue({...this.productoForm.value,valor:900000});
    console.log( this.productoForm.value);
  }

  if(this.productoForm.value.tipoComedor==2 && this.productoForm.value.numeroPuesto==1  ){
    this.productoForm.setValue({...this.productoForm.value,valor:900000});
    console.log( this.productoForm.value);
  }

  if(this.productoForm.value.tipoComedor==2 && this.productoForm.value.numeroPuesto==2  ){
    this.productoForm.setValue({...this.productoForm.value,valor:1200000});
    console.log( this.productoForm.value);
  }

  if(this.productoForm.value.tipoComedor==2 && this.productoForm.value.numeroPuesto==3  ){
    this.productoForm.setValue({...this.productoForm.value,valor:2400000});
    console.log( this.productoForm.value);
  }

  if(this.productoForm.value.tipoComedor==3 && this.productoForm.value.numeroPuesto==1  ){
    this.productoForm.setValue({...this.productoForm.value,valor:800000});
    console.log( this.productoForm.value);
  }

  if(this.productoForm.value.tipoComedor==3 && this.productoForm.value.numeroPuesto==2  ){
    this.productoForm.setValue({...this.productoForm.value,valor:150000});
    console.log( this.productoForm.value);
  }

  if(this.productoForm.value.tipoComedor==3 && this.productoForm.value.numeroPuesto==3  ){
    this.productoForm.setValue({...this.productoForm.value,valor:290000});
    console.log( this.productoForm.value);
  }



}



  crear() {
    this.productoServices.guardar(this.productoForm.value).subscribe(()=>{

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
