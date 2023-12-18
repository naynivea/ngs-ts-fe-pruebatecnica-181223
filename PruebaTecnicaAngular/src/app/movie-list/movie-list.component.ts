import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../the-movie-db.service';

@Component({
 selector: 'app-movie-list',
 templateUrl: './movie-list.component.html',
 styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
 movies: Array<any> = [];

 constructor(private tmdbService: TmdbService) { }

 ngOnInit() {
   this.tmdbService.getPopularMovies().subscribe((data) => {
     this.movies = data['results'];
   });
 }
}
