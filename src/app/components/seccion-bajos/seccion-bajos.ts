import { Component, inject, OnInit, signal } from '@angular/core';
import { ServicesThomann } from '../../services/services-thomann';
import { Instrumento } from '../../models/entiti-instrumento';
import { Loading } from "../loading/loading";
import { StockPipe } from "../../pipes/stock-pipe";
import { NgClass } from '@angular/common';
import { EurosPipe } from "../../pipes/euros-pipe";
import { NoImagen } from '../../directives/no-imagen';
import { FondoAmarillo } from '../../directives/fondo-amarillo';
import { EstrellasLikes } from "../estrellas-likes/estrellas-likes";
import { CorazonFavoritos } from "../corazon-favoritos/corazon-favoritos";

@Component({
  selector: 'app-seccion-bajos',
  imports: [Loading, StockPipe, NgClass, EurosPipe, NoImagen, FondoAmarillo, EstrellasLikes, CorazonFavoritos],
  templateUrl: './seccion-bajos.html',
  styleUrl: './seccion-bajos.css',
})
export class SeccionBajos implements OnInit{

  estaCargado = signal<boolean>(false);

  _InstrumentosService: ServicesThomann = inject(ServicesThomann);
  //instrumentos: Array<Instrumento> = [];
  instrumentos = signal<Array<Instrumento>>([]);

  ngOnInit(): void {
    this.cargarInstrumentos();
  }

  cargarInstrumentos(): void {
    this._InstrumentosService.getInstrumentos().subscribe({

          next: (datos : Array<Instrumento>) => {
            this.instrumentos.set(datos);
            console.log(this.instrumentos);
          }
          ,
          error: (error) => {
            console.error('Error al cargar los instrumentos', error);
          }
          ,
          complete: () => {
            console.log('Carga de instrumentos completada');
            this.estaCargado.set(true);
          }
        });
  }

  

}
