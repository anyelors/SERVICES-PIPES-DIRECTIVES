import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-estrellas-likes',
  imports: [],
  templateUrl: './estrellas-likes.html',
  styleUrl: './estrellas-likes.css',
})
export class EstrellasLikes implements OnInit{

  @Input() nLikes: number = 0;
  public estrellasLikes: string[] = []; // Array de strings
  public estrellasNoLikes: string[] = []; // Array de strings

  ngOnInit(): void {
    this.estrellasLikes = [];
    this.estrellasNoLikes = [];

    if (this.nLikes > 0) {
      for (let i = 0; (i < this.nLikes && i < 5); i++) {
        this.estrellasLikes.push('fa-solid fa-star');
      }
    }

    if (this.nLikes < 5) {
      for (let i = 0; i < 5 - this.nLikes; i++) {
        this.estrellasNoLikes.push('fa-regular fa-star');
      }
    }
  }
}
