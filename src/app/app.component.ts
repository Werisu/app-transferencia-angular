import { ImcService } from './services/imc.service';
import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';

  constructor(private transferenciaService: TransferenciaService, private imcService: ImcService){}

  transferir($event: any){
    this.transferenciaService.adicionar($event);
  }

  confirmar($event: any){
    console.log($event);
    this.imcService.adiciona($event)
  }
}
