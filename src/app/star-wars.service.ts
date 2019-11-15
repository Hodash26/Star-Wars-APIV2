import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movies';
import { Character } from './characters'


@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private starwarsUrl = "https://swapi.co/api/"
  movie$: Observable<Movie[]>;

  constructor(private readonly http: HttpClient) {}

  getStarWarsMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]> (
      this.starwarsUrl+ 'films/'
    )
    .pipe (
      map(
        data => data ['results']
      )
    )
  }

  getStarWarsCharacters(): Observable<Character[]> {
    return this.http.get<Character[]> (
      this.starwarsUrl+ 'people/'
    )
    .pipe (
      map( 
        data => data ['results']
      )
    )
  }
}
