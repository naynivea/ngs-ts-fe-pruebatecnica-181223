import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = 'd15be053f4b8cd45bcf83e6f1491d25b'; //
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  public getPopularMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  public getDetailMovies(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
}
