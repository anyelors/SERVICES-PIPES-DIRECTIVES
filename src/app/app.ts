import { Component } from '@angular/core';
import { SeccionBajos } from "./components/seccion-bajos/seccion-bajos";


@Component({
  selector: 'app-root',
  imports: [SeccionBajos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
