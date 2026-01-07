import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Dato } from '../models/entities';
import { BehaviorSubject, delay, finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMorty {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  _http: HttpClient = inject(HttpClient);

  getPersonajes(nPagina: number): Observable<Dato> {
    console.log('Página solicitada:', nPagina);

    this.loadingSubject.next(true);

    return this._http.get<Dato>(`https://rickandmortyapi.com/api/character?page=${nPagina}`).pipe(
      delay(1500), // Simula latencia (opcional, solo para ver el loading
      finalize(() => this.loadingSubject.next(false))
    );
  }

}
