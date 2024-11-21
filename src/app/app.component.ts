import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from "./components/list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Rick and Morty';
}
