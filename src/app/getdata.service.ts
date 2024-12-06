import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() { }

  // Modificando o método doGet para aceitar um parâmetro 'q'
  doGet(q: string) {
    const options = {
      url: `https://newsapi.org/v2/everything?q=${q}&sortBy=publishedAt&language=pt&apiKey=9f5d4ef1ea5b44c9bf855efbe62b9fdb`,
    };
    return from(Http.get(options));
  }
}
