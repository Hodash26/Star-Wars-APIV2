import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies'
import { StarWarsService } from '../star-wars.service';


@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.css']
})
export class MovieDetailsComponentComponent implements OnInit {
  @Input() movie:Movie;

  constructor(private starwarsService:StarWarsService) { }

  ngOnInit() {
  }

}
