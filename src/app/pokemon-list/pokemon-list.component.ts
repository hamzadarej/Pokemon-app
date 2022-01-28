import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import {
  faSkullCrossbones,
  faShieldAlt,
  faTachometerAlt,
  faArrowsAltV,
  faHeartbeat,
  faWeight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonData: any[] = [];
  pokemonNumber: number = 0;
  pokemonLimit: number = 16;
  page = 1;
  //icons variables
  faSkullCrossbones = faSkullCrossbones;
  faShieldAlt = faShieldAlt;
  faTachometerAlt = faTachometerAlt;
  faArrowsAltV = faArrowsAltV;
  faHeartbeat = faHeartbeat;
  faWeight = faWeight;

  constructor(private dataService: DataService) {}
  userInput: string = '';
  error: boolean = false;
  errorMessage: string = '';
  ngOnInit(): void {
    this.getPokemon();

    this.dataService.getMessage().subscribe((message) => {
      this.userInput = message;
      //if the user enter something its going to get all the pokemon-list from the Api and search through
      if (this.userInput.length !== 0) {
        this.pokemonLimit = 94;
      } else {
        this.pokemonLimit = 16;
        this.pokemonData = [];
      }
      // html running before ts so to update the pokemonData i have to empty that array and call the function to get that filtered data
      (this.pokemonData = []), this.getPokemon();
    });
  }
  // getPokemon
  getPokemon() {
    this.dataService.getPokemon(this.pokemonLimit, this.page + 0).subscribe(
      (response: any) => {
        //set totalPokemonNumber
        this.pokemonNumber = response.count;
        //set pokemonData
        response.results.filter((element: any) => {
          if (element.name.includes(this.userInput)) {
            this.dataService.getMoreData(element.name).subscribe(
              (response: any) => {
                this.pokemonData.push(response);
                this.error = false;
              },
              //handling error getMoreData
              (error) => {
                this.error = true;
                this.errorMessage = `Something went wrong ${error.message}`;
                console.log(error, 'error');
              }
            );
          } else {
            this.error = true;
            this.errorMessage =
              'Pokemon with this name Not Found ! try with another Name';
          }
        });
      },
      //handling error getPokemon
      (error) => {
        this.error = true;
        this.errorMessage = `Something went wrong ${error.message}`;
        console.log(error, 'error');
      }
    );
  }
}
