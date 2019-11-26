import { Component } from '@angular/core';
import { GrupoComponent } from '../component/grupo/grupo.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {


  constructor() { }

  aoSelecionar(numero: any){
    console.log(numero);
  }
}
