import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../services/autenticar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private autenticarService: AutenticarService) { }

  
  ngOnInit() {
    
  }

  botaoAutenticar(usuario, senha){
    var response = this.autenticarService.autenticarUsuario(usuario,senha);
  }
}
