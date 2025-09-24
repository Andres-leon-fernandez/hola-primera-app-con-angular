import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Padre } from "./padre/padre";
import { Hijo } from "./hijo/hijo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Padre, Hijo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Esta es mi primera paguina en angulas uwu');
}