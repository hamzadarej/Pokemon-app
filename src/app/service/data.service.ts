import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  
  public messageSource =new Subject<string>();
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {}

  setMessage(message: string){
    this.messageSource.next(message)
  }
  getMessage(): Observable<string>{
   return this.messageSource.asObservable()
  }



  // Get all Pokemon's
  getPokemon(limit: number, offset: number) {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
  }
  // Get Pokemon's data by name
  getMoreData(name: any[]=[]) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
