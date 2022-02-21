import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class ListAllAreasService {
  urlService = `${url}list.php`;

  constructor(private http: HttpClient) { }

  getAllAreas() {
    return this.http.get<any>(this.urlService, {
      params: {
        a: 'list'
      }
    });
  }
}
