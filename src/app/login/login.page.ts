import { Component } from '@angular/core';
import { AutenticarService } from '../services/autenticar.service';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuario;
  senha;

  constructor(private autenticarService: AutenticarService) { }

  login(){

    var userAutenticado = this.autenticarService.autenticarUsuario(this.usuario, this.senha);

    console.log(userAutenticado);
  }
}