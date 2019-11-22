import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../services/autenticar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  name;
  password;

  constructor(private autenticarService: AutenticarService) { }
  allLogins: Observable<any>;

  ngOnInit(){
  }

  login(){

    this.autenticarService.autenticaUser().subscribe((data)=> {

      console.log(data);

    });

   

  }
}