import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';

  transferencias: any[] = [];
  pessoas: any[] = [];

  transferir($event: any){
    console.log($event);
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }

  confirmar($event: any){
    console.log($event);
    this.pessoas.push($event);

  }
}
