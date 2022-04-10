import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTranferenciaComponent {

  aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private transferenciaService: TransferenciaService, private router: Router){}

  transferir(): void {
    console.log('solicitada nova transferencia');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.transferenciaService.adicionar(valorEmitir).subscribe((response)=>{
      console.table(response);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error),
    (complete: void) => console.log("solicitação concluída")

    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
