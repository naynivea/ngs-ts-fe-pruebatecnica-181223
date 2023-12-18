import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../the-movie-db.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
})
export class SerieListComponent implements OnInit {
  series: Array<any> = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.tmdbService.getSeries().subscribe((data) => {
      this.series = data['results'];
    });
  }
}
