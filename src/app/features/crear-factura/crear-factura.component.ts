import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Factura } from 'src/app/shared/entities/Factura';
import { Producto } from 'src/app/shared/entities/Producto';
import { ClientesService } from 'src/app/shared/servicios/clientes.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  createFactura: FormGroup;
  idClient: string;
  arrayProductos: Producto[] = [];

  constructor(private formBuilder: FormBuilder, private clienteService: ClientesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createFactura = this.formBuilder.group({
      name: [null, Validators.required],
      cantidad: [null, Validators.required],
      valor: [null, Validators.required],
      descuento: [0]
    });

    this.route.queryParams
      .subscribe(params => {
        this.idClient = params.idClienteFacura;

      }
    );
  }

  generarFactura(){
    //localStorage.setItem('nombre',JSON.stringify(pruebaFactura2))
    const pruebaFactura = <Factura> {
      descuentoFactura: this.createFactura.value.descuento,
      productos: this.arrayProductos
    }


    this.clienteService.createBilling(pruebaFactura, this.idClient).subscribe(resp =>{
      alert("Se guardo Correctamente")
      return resp;
    })


  }



  submit() {
    if (!this.createFactura.valid) {
      return;
    }

    const pruebaProducto = <Producto> {
      nombreProducto: this.createFactura.value.name,
      cantidad: this.createFactura.value.cantidad,
      valorUnitario: this.createFactura.value.valor
    }

    this.arrayProductos.push(pruebaProducto);

    alert("Producto agregado correctamente")
  }

}
