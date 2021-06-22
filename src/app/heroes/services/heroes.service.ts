import { Heroe } from './../interfaces/heroes.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment'; // importar solo /environment porque sino traerá el de produccion

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl = environment.baseUrl;

  constructor( private httpClient: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroesById( id: string ): Observable<Heroe> {
    return this.httpClient.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getHeroesByName( value: string ): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${this.baseUrl}/heroes?q=${value}&_limit=6`);
  }

  agregarHeroe( heroe: Heroe ): Observable<Heroe> {
    return this.httpClient.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }

  actualizarHeroe( heroe: Heroe ): Observable<Heroe> {
    return this.httpClient.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  borrarHeroe( heroe: Heroe ): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/heroes/${heroe.id}`);
  }

}
