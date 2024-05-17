// src/app/anime/anime.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListarAnimesComponent } from './anime-list/anime-list.component';
import { DetalleAnimeComponent } from './detalle-anime/detalle-anime.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ListarAnimesComponent,
    DetalleAnimeComponent 
  ],
  exports: [
    ListarAnimesComponent,
    DetalleAnimeComponent
  ]
})
export class AnimeModule { }
