import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instrumento } from '../models/entiti-instrumento';

@Injectable({
  providedIn: 'root',
})
export class ServicesThomann {

  private _http: HttpClient = inject(HttpClient);

  getInstrumentos(): Observable<Instrumento[]> {
    return this._http.get<Instrumento[]>(`https://my-json-server.typicode.com/stoner11111/thomann3/posts`);
  }
  
}
