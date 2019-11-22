import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../services/autenticar.service';
import { Observable, from } from 'rxjs';
import { NavController } from '@ionic/angular';
import { SourceAndMapMixin } from 'webpack-sources';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario
  senha


  constructor(private autenticarService: AutenticarService, public navCtrl: NavController,) { }

  ngOnInit(){
  }

  private user = "admin";
  private pass = "admin";

  login(){
    if(this.usuario == this.user && this.senha == this.pass){
      this.navCtrl.navigateForward('home');
    }else{
      alert("Senha ou usuario invalido");
    }
  }
}
