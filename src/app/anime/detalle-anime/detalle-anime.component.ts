import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Anime } from '../Anime';

@Component({
  selector: 'app-detalle-anime',
  templateUrl: './detalle-anime.component.html',
  styleUrls: ['./detalle-anime.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DetalleAnimeComponent {
  @Input() anime!: Anime;  // Recibe el anime seleccionado
}
