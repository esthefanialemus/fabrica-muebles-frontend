import { ClienteService } from './../../shared/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(protected clienteService: ClienteService) { }

  ngOnInit(): void {

    this.construirFormularioCliente();
    this.clienteForm.setValue({...this.clienteForm.value})
  }

  crear() {
    this.clienteService.guardar(this.clienteForm.value).subscribe(()=>{

    });
  }

  private construirFormularioCliente() {

    this.clienteForm = new FormGroup({
      nombre : new FormControl('', Validators.required),
      apellido : new FormControl('', Validators.required),
      identificacion : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required)


    });
  }

}
