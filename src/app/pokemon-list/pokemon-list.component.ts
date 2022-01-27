import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonData: any[] = [];
  pokemonsNumber: number = 0;
  page = 1;
  
  constructor(private dataService: DataService) {}
  userInput: string = '';
  ngOnInit(): void {
    this.getPokemon();

    this.dataService.getMessage().subscribe((message) => {
      console.log(message),
        (this.userInput = message),
        // html running before ts so to update the user input i have to empty that array and call the function to get that filtered data
        (this.pokemonData = []),
        this.getPokemon();
    });
  }

  // getPokemon

  getPokemon() {
    console.log(this.userInput);
    this.dataService
      .getPokemon(16, this.page + 0)
      .subscribe((response: any) => {
        //set totalPokemonNumber
        this.pokemonsNumber = response.count;
        //set pokemonData
        response.results.filter((element: any) => {
          if (element.name.includes(this.userInput)) {
            this.dataService
              .getMoreData(element.name)
              .subscribe((response: any) => {
                this.pokemonData.push(response);
              });
          }
        });
      });
  }
}
