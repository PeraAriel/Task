import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Esercizio1 } from './esercizio1/esercizio1';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Esercizio1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-app');
}
