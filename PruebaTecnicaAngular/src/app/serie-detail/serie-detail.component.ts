import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../the-movie-db.service';

@Component({
  selector: 'app-serie-detail',
  standalone: true,
  imports: [],
  templateUrl: './serie-detail.component.html',
  styleUrl: './serie-detail.component.css',
})
export class SerieDetailComponent implements OnInit {
  serie: any;

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id: string = params['id'];
      this.tmdbService.getDetailSeries(id).subscribe((result) => {
        this.serie = result;
      });
    });
  }
}
