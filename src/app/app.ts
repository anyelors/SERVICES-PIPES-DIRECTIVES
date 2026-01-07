import { Component } from '@angular/core';
import { RickMortyList } from './components/rick-morty-list/rick-morty-list';


@Component({
  selector: 'app-root',
  imports: [RickMortyList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
