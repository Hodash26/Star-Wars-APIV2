import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies';
import { StarWarsService } from '../star-wars.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-select-component',
  templateUrl: './movie-select-component.component.html',
  styleUrls: ['./movie-select-component.component.css']
})
export class MovieSelectComponentComponent implements OnInit {
  movies: Movie[];
  movieForm: FormGroup;
  selectedMovie: Movie;

  constructor(private starwarsService:StarWarsService) {
    this.movieForm = new FormGroup({
      movieName: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
    this.getmovies();
  }
  getmovies(): void {
    this.starwarsService.getStarWarsMovies().subscribe(movies => (this.movies=movies));
  }

  onSubmit() {
    console.log(this.movieForm.controls.movieName.value);
    this.selectedMovie=this.movieForm.controls.movieName.value
  }

}
