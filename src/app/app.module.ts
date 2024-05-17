import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeService } from './anime/anime.service';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AppComponent
  ],
  providers: [AnimeService]
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
}
