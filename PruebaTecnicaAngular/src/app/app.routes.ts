import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movie-list',
    component: MovieListComponent,
  },
  {
    path: 'movie-detail/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'serie-list',
    component: SerieListComponent,
  },
  {
    path: 'serie-detail/:id',
    component: SerieDetailComponent,
  },
];
