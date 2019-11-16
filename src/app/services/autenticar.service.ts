import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private http: HttpClient) { }

  autenticarUsuario(usuario: string, senha: string) {
    return this.http.get(`http://localhost:44398/api/TodoLogin`).subscribe((retorno)=> {
    });
  }
   /*return this.http.post(`https://localhost:44398/api/TodoLogin`, Boolean).subscribe((retorno)=> {
    });*/
}
