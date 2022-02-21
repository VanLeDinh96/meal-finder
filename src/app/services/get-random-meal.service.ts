import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class GetRandomMealService {
  urlService = `${url}random.php`;

  constructor(private http: HttpClient) { }

  getRandomMeal() {
    return this.http.get<any>(this.urlService);
  }
}
