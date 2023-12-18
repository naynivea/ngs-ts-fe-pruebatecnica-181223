import { TestBed } from '@angular/core/testing';

import { TmdbService } from './the-movie-db.service';

describe('TheMovieService', () => {
  let service: TmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
