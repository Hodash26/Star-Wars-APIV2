import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movies';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-movie-select-component',
  templateUrl: './movie-select-component.component.html',
  styleUrls: ['./movie-select-component.component.css']
})
export class MovieSelectComponentComponent implements OnInit {
  movies: Movie[];
  print : string;
  selectValue: string;
  constructor(private starwarsService:StarWarsService) { }

  ngOnInit() {
    this.getmovies();
  }
  getmovies(): void {
    this.starwarsService.getStarWarsMovies().subscribe(movies => (this.movies=movies));
  }

  message() {
    this.print = this.selectValue;
    console.log(this.selectValue);
    console.log(this.movies.values)
  }
}
