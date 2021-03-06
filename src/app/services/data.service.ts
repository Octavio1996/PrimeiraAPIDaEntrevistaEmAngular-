import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  // get Pokemons 
  getPokemons() {
  return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10');
  }


  // Get More Pokemons Data 
  getMoreData(nome: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/${name}');
  }
}
