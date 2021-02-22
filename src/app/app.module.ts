import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GenreComponent } from './pages/genre/genre.component';
import { LikedComponent } from './pages/liked/liked.component';
import { GenresComponent } from './components/genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenreComponent,
    LikedComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
