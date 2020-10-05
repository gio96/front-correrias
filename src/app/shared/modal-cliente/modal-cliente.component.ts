import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../entities/Cliente';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent implements OnInit {
  /*public breakpoint: number;
  public fname: string = `Ramesh`;
  //public lname: string = `Suresh`;
  public addCusForm: FormGroup;
  firstname:string
  wasFormChanged = false;*/

  //public fname: string = "";
  //public lname: string = "";


  createCliente: FormGroup;
  //cliente: Cliente
  spresp: any;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor( public dialogRef: MatDialogRef<ModalClienteComponent>, private formBuilder: FormBuilder,
    private clienteService: ClientesService){}


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

  /*public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      firstname: [this.firstname, []]
      //,
      //lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      //email: [null, [Validators.required, Validators.email]],
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }*/

  /*public onaddCus(): void {
    this.markAsDirty(this.addCusForm);
  }*/


  close() {
    this.dialogRef.close();
  }

  enviar(){
    //alert(this.fname)
    //alert(this.addCusForm.)
    //this.dialogRef.close(this.addCusForm.value)
    //alert(this.fname)
    //this.dialogRef.afterClosed().subscribe(value => {
    //  alert(`Dialog sent: ${value}`)
    //  console.log(`Dialog sent: ${value}`);
    //});
  }


  /*public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }*/

}
