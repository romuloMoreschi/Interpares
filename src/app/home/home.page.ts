import { Component, ViewChild } from '@angular/core';
import { NotasComponent } from '../component/notas/notas.component';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {




  constructor() {}

  aoSelecionarNota(nota: any){
    console.log(nota);
  }

}
