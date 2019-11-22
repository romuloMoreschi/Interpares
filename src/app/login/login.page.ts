import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../services/autenticar.service';
import { Observable, from } from 'rxjs';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario


  constructor(private autenticarService: AutenticarService, public navCtrl: NavController,) { }

  ngOnInit(){
  }


  login(){
    this.autenticarService.autenticaUser().subscribe((data)=> {

      console.log(data);

    });
  }
}
/*if(data){
  this.navCtrl.navigateForward('home');
}*/