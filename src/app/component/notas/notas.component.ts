import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss'],
})
export class NotasComponent implements OnInit {

  nota:number;

  @Input()
  pergunta: any;


  @Output() notaClicked: EventEmitter<number> =
        new EventEmitter<number>();


  constructor() { }


  algoMudou(){
    this.notaClicked.emit(this.nota);
  }

  ngOnInit() {}

}
