import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { reject, resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {
  API_URL = "http://localhost:55267/api/TodoLogin/"

  constructor(private http: HttpClient) { }

  myCadastro: any

  autenticaUser(name): Observable<any>{
    return this.http.get('http://localhost:55267/api/TodoLogin/'+name);
  }

  cadastraUser(userName, nome, password): Observable<any>{
    return new Observable(() => {
      var data = {
        userName: userName,
        password: password
      };

      this.http.post(this.API_URL + 'register', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}

