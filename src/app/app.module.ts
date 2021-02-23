import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GenreComponent } from './pages/genre/genre.component';
import { GenresComponent } from './components/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LikedComponent } from './components/liked/liked.component';

import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenreComponent,
    GenresComponent,
    LikedComponent,
    HomeComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
