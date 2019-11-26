import { Component, ViewChild } from '@angular/core';
import { NotasComponent } from '../component/notas/notas.component';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage {

  constructor() { }
  
  aoSelecionarNota(nota: any){
    console.log(nota);
  }

}
