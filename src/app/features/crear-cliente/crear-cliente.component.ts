import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/shared/entities/Cliente';
import { ClientesService } from 'src/app/shared/servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit{

  createCliente: FormGroup;
  //cliente: Cliente
  spresp: any;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;


  constructor(private formBuilder: FormBuilder, private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.createCliente = this.formBuilder.group({
      name: [null, Validators.required],
      city: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]]
    });
  }

  submit() {
    if (!this.createCliente.valid) {
      return;
    }

    const prueba = <Cliente> {
      nombreCompleto : this.createCliente.value.name,
      ciudad : this.createCliente.value.city,
      telefono : this.createCliente.value.phone,
      correoCliente : this.createCliente.value.email
    }

    this.clienteService.createClient(prueba).subscribe(resp =>{
      alert("Se guardo Correctamente")
      return resp;
    })
  }

}
