import { Component, inject, OnInit, signal } from '@angular/core';
import { ServicesThomann } from '../../services/services-thomann';
import { Instrumento } from '../../models/entiti-instrumento';
import { Loading } from "../loading/loading";

@Component({
  selector: 'app-seccion-bajos',
  imports: [Loading],
  templateUrl: './seccion-bajos.html',
  styleUrl: './seccion-bajos.css',
})
export class SeccionBajos implements OnInit{

  estaCargado = signal<boolean>(false);

  _InstrumentosService: ServicesThomann = inject(ServicesThomann);
  instrumentos: Array<Instrumento> = [];

  ngOnInit(): void {
    this.cargarInstrumentos();
  }

  cargarInstrumentos(): void {
    this._InstrumentosService.getInstrumentos().subscribe({

          next: (datos: Array<Instrumento>) => {
            this.instrumentos = datos;
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
