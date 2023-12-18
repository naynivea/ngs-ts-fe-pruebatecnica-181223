import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../the-movie-db.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{

  movie: any;

  constructor(private route:ActivatedRoute, private tmdbService: TmdbService) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id:string = params['id'];
      this.tmdbService.getDetailMovies(id).subscribe((result)=>{
        this.movie = result;
      });
    })
    
  }
}
