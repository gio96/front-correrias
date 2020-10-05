import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit{

  createCliente: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;


  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.createCliente.value);
  }

}
