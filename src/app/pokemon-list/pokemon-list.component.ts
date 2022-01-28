import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonData: any[] = [];
  pokemonNumber: number = 0;
  page = 1;

  constructor(private dataService: DataService) {}
  userInput: string = '';
  error: boolean = false;
  errorMessage: string = '';
  ngOnInit(): void {
    this.getPokemon();
    this.dataService.getMessage().subscribe((message) => {
      (this.userInput = message),
        // html running before ts so to update the user input i have to empty that array and call the function to get that filtered data
        (this.pokemonData = []),
        this.getPokemon();
    });
  }
  // getPokemon
  getPokemon() {
    this.dataService.getPokemon(16, this.page + 0).subscribe(
      (response: any) => {
        //set totalPokemonNumber
        this.pokemonNumber = response.count;
        //set pokemonData
        response.results.filter((element: any) => {
          if (element.name.includes(this.userInput)) {
            this.dataService.getMoreData(element.name).subscribe(
              (response: any) => {
                this.pokemonData.push(response);
              },
              //handling error getMoreData
              (error) => {
                this.error = true;
                this.errorMessage = `Something went wrong ${error.message}`;
                console.log(error, 'error');
              }
            );
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
