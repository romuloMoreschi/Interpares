import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private http: HttpClient) { }

  autenticarUsuario(usuario: string, senha: string) {
    return this.http.post(`http://localhost:8100/login`, String).subscribe((retorno)=> {

      alert(retorno)
    });
  }


}
