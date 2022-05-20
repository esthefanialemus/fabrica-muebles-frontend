import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ClienteService } from './../../shared/service/cliente.service';
import { CrearClienteComponent } from './crear-cliente.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '@core/services/http.service';
import { TestBed,ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

describe('CrearClienteComponent', () => {
  let componentCliente: CrearClienteComponent;
  let fixture: ComponentFixture<CrearClienteComponent>;
  let clienteService: ClienteService;
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearClienteComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, CommonModule, FormsModule, ReactiveFormsModule],
      providers: [ClienteService, HttpService],
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClienteComponent);
    componentCliente = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'guardar').and.returnValue(of(null));

    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();


  });

  it('should create', () => {
    expect(componentCliente).toBeTruthy();
  });

  fit('deberia crear un cliente', async () => {
    componentCliente.clienteForm.controls.nombre.setValue('Catalina');
    componentCliente.clienteForm.controls.apellido.setValue('Delgado');
    componentCliente.clienteForm.controls.identificacion.setValue('123456');
    componentCliente.clienteForm.controls.email.setValue('cd@gmail.com');
    expect(componentCliente.clienteForm.valid).toBeTruthy();


  });
});
