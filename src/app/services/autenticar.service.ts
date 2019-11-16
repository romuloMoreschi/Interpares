import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private http: HttpClient) { }

  autenticaUser(): Observable<any>{
    return this.http.get('http://localhost:55267/api/TodoLogin').pipe(map((name: any) => name));
  }
}
