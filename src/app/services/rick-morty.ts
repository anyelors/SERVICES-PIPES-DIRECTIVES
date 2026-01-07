import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Dato, Personaje } from '../models/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMorty {

  _http:HttpClient = inject(HttpClient);

  getPersonajes(nPagina:number):Observable<Dato>{

    return this._http.get<Dato>(`https://rickandmortyapi.com/api/character?page=${nPagina}`);
  }
  
}
