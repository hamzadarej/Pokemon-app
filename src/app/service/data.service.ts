import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable ,BehaviorSubject, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //creating the loader to check if the data is there otherwise loading
  loader=new BehaviorSubject<boolean>(false);

  //including Observable subject to pass the data to all components
  private messageSource = new Subject<string>();
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {}
  //set the userInput in the nav(Header) :import
  setMessage(message: string) {
    this.messageSource.next(message);
  }
  // get the userINput from the nav and pass the value to the filter
  getMessage(): Observable<string> {
    return this.messageSource.asObservable();
  }

  // Get all Pokemon's
  getPokemon(limit: number, offset: number):Observable<any> {
    return this.http.get<any>(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    ).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
return throwError(error)
  }


  // Get Pokemon's data by name
  getMoreData(name: any[] = []):Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(catchError(this.handleError));
  }
}