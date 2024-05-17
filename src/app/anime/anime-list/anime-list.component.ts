// src/app/anime/listar-animes/listar-animes.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AnimeService } from '../anime.service';
import { Anime } from '../Anime';
import { DetalleAnimeComponent } from '../detalle-anime/detalle-anime.component';

@Component({
  selector: 'app-listar-animes',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, DetalleAnimeComponent]
})
export class ListarAnimesComponent implements OnInit {
  animes: Anime[] = [];
  averageRating: number = 0;
  totalEpisodes: number = 0;
  selectedAnime?: Anime;

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe(data => {
      this.animes = data;
      this.calculateStats();
    });
  }

  calculateStats(): void {
    if (this.animes.length > 0) {
      this.averageRating = this.animes.reduce((acc, anime) => acc + anime.rating, 0) / this.animes.length;
      this.totalEpisodes = this.animes.reduce((acc, anime) => acc + anime.episodes, 0);
    }
  }

  selectAnime(anime: Anime): void {
    this.selectedAnime = anime;
  }
}
