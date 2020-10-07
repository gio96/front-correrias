import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from '../entities/Cliente';
import { Factura } from '../entities/Factura';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  endpoint = 'http://localhost:8080/correrias/clientes';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getClients(): Observable<HttpResponse<Cliente[]>>{
    return this.http.get<Cliente[]>(this.endpoint, {observe: 'response'});
  }

  public createClient(data): Observable<Cliente>{
    return this.http.post<Cliente>(this.endpoint,JSON.stringify(data),this.httpOptions)
  }


  public getFacturas(idCliente: string): Observable<HttpResponse<Factura[]>>{
    return this.http.get<Factura[]>(`${this.endpoint}/${idCliente}/facturas`, {observe: 'response'});
  }

  public createBilling(data, idCliente: string): Observable<Factura>{
    return this.http.post<Factura>(`${this.endpoint}/${idCliente}/facturas`,JSON.stringify(data),this.httpOptions)
  }


  public showTcrm(): Observable<any>{
    return this.http.get<any>(`https://trm-colombia.makaw-dev.now.sh/?date=2020-10-06`,{observe: 'response'})
  }


  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
