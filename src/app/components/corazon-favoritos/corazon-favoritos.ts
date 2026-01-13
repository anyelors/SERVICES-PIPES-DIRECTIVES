import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-corazon-favoritos',
  imports: [NgClass],
  templateUrl: './corazon-favoritos.html',
  styleUrl: './corazon-favoritos.css',
})
export class CorazonFavoritos {

  favorito = signal<boolean>(true);


  fnFavorito() {
    this.favorito.update((favorito) => !favorito);
  }

}
