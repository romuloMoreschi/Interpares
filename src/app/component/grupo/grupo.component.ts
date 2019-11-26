import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss'],
})
export class GrupoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  
  @Output() grupoClicked: EventEmitter<number> =
        new EventEmitter<number>();
}
