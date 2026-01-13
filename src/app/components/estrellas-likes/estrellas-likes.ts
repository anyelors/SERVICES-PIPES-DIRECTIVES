import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estrellas-likes',
  imports: [],
  templateUrl: './estrellas-likes.html',
  styleUrl: './estrellas-likes.css',
})
export class EstrellasLikes {

  @Input() nLikes: number = 0;

}
