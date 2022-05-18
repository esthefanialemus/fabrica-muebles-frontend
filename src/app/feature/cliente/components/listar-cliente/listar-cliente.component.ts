import { ClienteService } from './../../shared/service/cliente.service';
import { Cliente } from './../../shared/model/cliente';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  public listaClientes: Observable <Cliente[]>;

  constructor(protected ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.listaClientes= this.ClienteService.consultar();
    console.log(this.listaClientes);

  }



}
