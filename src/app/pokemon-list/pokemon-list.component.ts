import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonData: any[] = [];
  pokemonsNumber: number;
  page = 1;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemon();
  }
  // getPokemon
  getPokemon() {
    this.dataService
      .getPokemon(16, this.page + 0)
      .subscribe((response: any) => {
        //set totalPokemonNumber
        this.pokemonsNumber = response.count;
        //set pokemonData
        response.results.forEach((element: any) => {
          this.dataService
            .getMoreData(element.name)
            .subscribe((response: any) => {
              this.pokemonData.push(response);
              console.log(this.pokemonData);
            });
        });
      });
  }
}
