import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaDeTrasferencias: any[];
  private url = 'http://localhost:3000/transferencias';

constructor(private httpCliente: HttpClient) {
  this.listaDeTrasferencias = [];
 }

get transferencias(){
  return this.listaDeTrasferencias;
}

todas(): Observable<Transferencia[]>{
  return this.httpCliente.get<Transferencia[]>(this.url); // trasnferencia response
}

adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hitradar(transferencia);

    let response = this.httpCliente.post<Transferencia>(this.url, transferencia);

    return response;
}

private hitradar(transferencia: any){
  transferencia.data = new Date();
}

}
