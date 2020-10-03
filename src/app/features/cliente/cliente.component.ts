import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/shared/servicios/clientes.service';
import {Cliente} from '../../shared/entities/Cliente'


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  cliente: Cliente[]= [];

  constructor(private obtenerClientesService: ClientesService) { }

  ngOnInit(): void {
    this.obtenerClientesService.getEmployees().subscribe(res => {
      this.dataSource = res.body;
    })
  }

  displayedColumns: string[] = ['nombreCompleto', 'ciudad', 'telefono', 'correoCliente'];
  dataSource = this.cliente;

}
