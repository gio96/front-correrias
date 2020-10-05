import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from 'src/app/shared/entities/Factura';
import { ClientesService } from 'src/app/shared/servicios/clientes.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FacturasComponent implements OnInit {

  idClient: string;
  //facturas: Observable<HttpResponse<Factura[]>>;
  facturas: Factura[]= [];
  //displayedRows$: Observable<Factura[]>;

  constructor(private obtenerFacturasClientes: ClientesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.idClient = params.idClienteFacura;

      }
    );


    this.obtenerFacturasClientes.getFacturas(this.idClient).subscribe(res => {
      //this.dataSource = res.body;
      this.facturas = res.body;
    })

    /*this.obtenerFacturasClientes.getFacturas(this.idClient).subscribe(res => {
      //this.dataSource = res.body;
      debugger;
      this.facturas = res.body;
    })*/

  }

  //displayedColumns: string[] = ['descuentoFactura', 'totalFactura', 'fechaGenerada'];
  //dataSource = this.facturas;

}
