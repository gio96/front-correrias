import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { ClientesService } from 'src/app/shared/servicios/clientes.service';
import {Cliente} from '../../shared/entities/Cliente'
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalClienteComponent } from 'src/app/shared/modal-cliente/modal-cliente.component';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  cliente: Cliente[]= [];
  animal: string;

  constructor(private obtenerClientesService: ClientesService,
    public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerClientesService.getClients().subscribe(res => {
      this.dataSource = res.body;
    })
  }

  displayedColumns: string[] = ['nombreCompleto', 'ciudad', 'telefono', 'correoCliente','actions'];
  dataSource = this.cliente;


  getIdCliente(idClient){
    //REDIRIGIR A LA PANTALLA CON LAS FACTURAS QUE TIENE EL USUARIO
    alert(idClient)
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '640px';
    dialogConfig.disableClose= true;
    const dialogRef = this.matDialog.open(ModalClienteComponent, dialogConfig);
  }


  /*crearCliente(cliente: Cliente){
    alert(JSON.stringify(cliente))
  }*/

}
