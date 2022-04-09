import { ImcService } from './../services/imc.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoas: any[] = [];

  constructor(private imcService: ImcService) { }

  ngOnInit(): void {
    this.pessoas = this.imcService.pessoas;
  }

}
