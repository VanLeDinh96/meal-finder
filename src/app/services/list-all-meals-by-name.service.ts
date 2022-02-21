import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../constants/api';

@Injectable({
    providedIn: 'root'
})
export class ListAllMealsByNameService {
    urlService = `${url}search.php`;

    constructor(private http: HttpClient) { }

    getAllMealByName(name: string) {
        return this.http.get<any>(this.urlService, {
            params: {
                s: name
            }
        });
    }
}
