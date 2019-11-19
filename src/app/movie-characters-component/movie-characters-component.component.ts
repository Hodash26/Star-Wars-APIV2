import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../characters";
import { StarWarsService } from "../star-wars.service";

@Component({
  selector: "app-movie-characters-component",
  templateUrl: "./movie-characters-component.component.html",
  styleUrls: ["./movie-characters-component.component.css"]
})
export class MovieCharactersComponentComponent implements OnInit {
  @Input() selectedCharacter: string;
  characters: Character[];
  character: Character[];

  constructor(private starwarsService: StarWarsService) {}

  ngOnInit() {
    this.getcharacters();
    this.getCharacter();
  }

  getcharacters(): void {
    this.starwarsService
      .getStarWarsCharacters()
      .subscribe(characters => (this.characters = characters));
  }

  getCharacter(): void {
    this.starwarsService
    .getStarWarsCharacter(this.selectedCharacter)
    .subscribe(character => (this.character = character ));
  }
}
