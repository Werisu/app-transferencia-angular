import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  @Input() pessoas: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
