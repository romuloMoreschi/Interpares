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

  myJSON: any;
  admin: any = "administrador"
  password: any = 12345

  ngOnInit(){
  }

  login(){
    /*this.autenticarService.autenticaUser(this.usuario).subscribe((data)=> {
      this.myJSON = JSON.stringify(data);
      console.log(this.myJSON);
    })
    if(this.myJSON == true){
      this.navCtrl.navigateForward('home');
    }else{
      alert("Usuario ou senha incorreta");
    }*/
    if(this.usuario == this.admin && this.senha == this.password){
      this.navCtrl.navigateForward('home');
    }else{
      alert("Usuario ou senha incorreta");
    }
  }
}