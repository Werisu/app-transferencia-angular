import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

private listaDePessoas: any[];
private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listaDePessoas = []
}

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
