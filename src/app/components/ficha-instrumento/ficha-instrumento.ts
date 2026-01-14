import { Component, Input } from '@angular/core';
import { StockPipe } from '../../pipes/stock-pipe';
import { NgClass } from '@angular/common';
import { NoImagen } from '../../directives/no-imagen';
import { EurosPipe } from '../../pipes/euros-pipe';
import { FondoAmarillo } from '../../directives/fondo-amarillo';
import { EstrellasLikes } from '../estrellas-likes/estrellas-likes';
import { CorazonFavoritos } from '../corazon-favoritos/corazon-favoritos';
import { Instrumento } from '../../models/entiti-instrumento';

@Component({
  selector: 'app-ficha-instrumento',
  imports: [StockPipe, NgClass, EurosPipe, NoImagen, FondoAmarillo, EstrellasLikes, CorazonFavoritos],
  templateUrl: './ficha-instrumento.html',
  styleUrl: './ficha-instrumento.css',
})
export class FichaInstrumento {

  @Input() instrumento: Instrumento;

}
