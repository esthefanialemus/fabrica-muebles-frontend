import { ClienteService } from './../../shared/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clienteForm: FormGroup;
  constructor(protected clienteService: ClienteService) { }

  ngOnInit(): void {
    this.construirFormularioCliente();
  }


  crear() {
    console.log(this.clienteForm.value);

    this.clienteService.guardar(this.clienteForm.value).subscribe(()=>{





    });
  }

  private construirFormularioCliente() {

    this.clienteForm = new FormGroup({

      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])

    });
  }


}
