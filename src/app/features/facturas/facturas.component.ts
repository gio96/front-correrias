import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from 'src/app/shared/entities/Factura';
import { ClientesService } from 'src/app/shared/servicios/clientes.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  idClient: string;
  facturas: Factura[]= [];

  constructor(private obtenerFacturasClientes: ClientesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.idClient = params.idClienteFacura;
      }
    );

    this.obtenerFacturasClientes.getFacturas(this.idClient).subscribe(res => {
      this.dataSource = res.body;
    })

  }

  displayedColumns: string[] = ['descuentoFactura', 'totalFactura', 'fechaGenerada'];
  dataSource = this.facturas;

}
