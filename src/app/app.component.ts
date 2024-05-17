import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarAnimesComponent } from './anime/anime-list/anime-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, ListarAnimesComponent, HttpClientModule]  // Combina las importaciones aquí
})
export class AppComponent {
  title = 'Gestión de Series de Anime';
}
