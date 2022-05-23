import { HttpService } from '@core-service/http.service';
import { ClienteService } from './../../shared/service/cliente.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';

describe('ClienteComponent', () => {

  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;

  beforeEach(waitForAsync( () => {
     TestBed.configureTestingModule({
      declarations: [ ClienteComponent ],
      imports:[CommonModule,HttpClientModule,RouterTestingModule],
      providers:[
        ClienteService,
        HttpService

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
