import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movies';
import { Character } from './characters'


@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private starwarsUrl = "https://swapi.co/api/"
  movie$: Observable<Movie[]>;
  character$: Observable<Character[]>

  constructor(private readonly http: HttpClient) {}

  getStarWarsMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]> (
      this.starwarsUrl+ "films/"
    )
    .pipe (
      catchError(this.handleError<Movie[]>('getMovies', [])),
      map(
        data => data ['results']
      )
    );
  }

  getStarWarsCharacters(): Observable<Character[]> {
    return this.http.get<Character[]> (
      this.starwarsUrl+"people/"
    )
    .pipe (
      catchError(this.handleError<Character[]>('getCharacters', [])),
      map( 
        data => data ['results']
      )
    );
  }

  getStarWarsCharacter(thisUrl : string): Observable<Character[]> {
    return this.http.get<Character[]>(thisUrl);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
}
