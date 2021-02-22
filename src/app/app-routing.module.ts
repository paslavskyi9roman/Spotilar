import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenreComponent } from './pages/genre/genre.component';
import { HomeComponent } from './pages/home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'genre', component: GenreComponent},
  {path: 'genre/:id', component: GenreComponent},
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
