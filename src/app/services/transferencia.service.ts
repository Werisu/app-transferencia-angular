import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaDeTrasferencias: any[];

constructor() {
  this.listaDeTrasferencias = [];
 }

get transferencias(){
  return this.listaDeTrasferencias;
}

adicionar(transferencia: any){
    this.hitradar(transferencia);
    this.listaDeTrasferencias.push(transferencia);
}

private hitradar(transferencia: any){
  transferencia.data = new Date();
}

}
