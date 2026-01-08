import { Component } from '@angular/core';
import { RickMortyList } from './components/rick-morty-list/rick-morty-list';
import { SeccionBajos } from "./components/seccion-bajos/seccion-bajos";


@Component({
  selector: 'app-root',
  imports: [RickMortyList, SeccionBajos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
