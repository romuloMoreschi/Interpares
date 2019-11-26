import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  aoSelecionar(numero: any){
    console.log(numero);
  }
}
