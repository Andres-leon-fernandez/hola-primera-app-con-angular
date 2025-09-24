import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-padre',
  imports: [],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {
  public readonly text= signal('tu papi uwu')
}
