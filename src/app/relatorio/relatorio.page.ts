import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {
  
  data
  Aluno
  Aluno1
  Aluno2
  Aluno3
  Aluno4
  Nota


  show: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  selecionarGrupo(){
    let Nota;
    
    this.Nota = "Perguntas nao respondidas!";

    if(this.data == "Interpares"){

      this.Aluno = "Romulo"
    
      this.Aluno1 = "Guilherme"
      
      this.Aluno2 = "Marcela"
      
      this.Aluno3 = "Luiz"

      this.Aluno4 = "Weslley"

    }else{

      this.Aluno = "Audrey"
    
      this.Aluno1 = "Leandro"

      this.Aluno2 = undefined

      this.Aluno3 = undefined

      this.Aluno4 = undefined
    }
  }
}
