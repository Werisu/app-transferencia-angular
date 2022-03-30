import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})

export class HelloWorldComponent{

  @Output() aoConfirmar = new EventEmitter<any>();

  nome: string = "";
  idade!: number;

  confirmar():void{
    const valorEmitir = {nome: this.nome, idade: this.idade};
    this.aoConfirmar.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos(){
    this.nome = "";
    this.idade = 0;
  }

}
