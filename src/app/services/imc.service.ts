import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  private listaDePessoas: any[];

constructor() { this.listaDePessoas = [] }

get pessoas(){
  return this.listaDePessoas;
}

public adiciona(pessoa: any){
  this.hitradar(pessoa);
  this.listaDePessoas.push(pessoa);
}

public hitradar(pessoa: any){
  pessoa.data = new Date();
}

}
