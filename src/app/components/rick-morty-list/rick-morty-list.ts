import { Component, inject, OnInit } from '@angular/core';
import { RickMorty } from '../../services/rick-morty';
import { Dato, Personaje } from '../../models/entities';
import { Loading } from "../loading/loading";

@Component({
  selector: 'app-rick-morty-list',
  imports: [Loading],
  templateUrl: './rick-morty-list.html',
  styleUrl: './rick-morty-list.css',
})
export class RickMortyList implements OnInit {

  nPagina: number = 1;

  _rickMortyService:RickMorty = inject(RickMorty);

  personajes:Array<Personaje> = [];

    ngOnInit(): void {
    this._rickMortyService.getPersonajes(this.nPagina).subscribe({

        next: (datos:Dato) => {
          this.personajes = datos.results;
          console.log(this.personajes);
        }
        ,
        error: (error) => {
          console.error('Error al cargar los personajes', error);
        }
        ,
        complete: () => {
          console.log('Carga de personajes completada');
        }
    });
  }

}


