import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerguntasPage } from './perguntas.page';
import { NotasComponent } from '../component/notas/notas.component';

const routes: Routes = [
  {
    path: '',
    component: PerguntasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerguntasPage, NotasComponent]
})
export class PerguntasPageModule {}
