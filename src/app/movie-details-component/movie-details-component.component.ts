import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies'
import { StarWarsService } from '../star-wars.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.css']
})
export class MovieDetailsComponentComponent implements OnInit {
  movies: Movie[];

  constructor(private starwarsService:StarWarsService) { }

  ngOnInit() {
    this.getmovies();
  }
  getmovies(): void {
    this.starwarsService.getStarWarsMovies().subscribe(movies => (this.movies=movies));
  }

}
