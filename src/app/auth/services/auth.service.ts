import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return {...this._auth!};
  }

  constructor( private httpClient: HttpClient ) { }

  verificaAuth(): Observable<boolean> {

    if ( !localStorage.getItem('token') ) {
      return of( false );
    }

    return this.httpClient.get<Auth>(`${this.url}/usuarios/1`)
                .pipe(
                  map( auth => {
                    this._auth = auth;
                    return auth ? true : false;
                  } )
                );
  }

  login(): Observable<Auth> {
    return this.httpClient.get<Auth>(`${this.url}/usuarios/1`)
                .pipe(
                  tap( auth => this._auth = auth ),
                  tap( auth => localStorage.setItem('token', auth.id.toString() ) )
                );
  }

  logout(): void {
    this._auth = undefined;
  }
}
