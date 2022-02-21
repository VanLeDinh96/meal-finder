import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../constants/api';

@Injectable({
    providedIn: 'root'
})
export class ListAllMealsByFirstLetterService {
    urlService = `${url}search.php`;

    constructor(private http: HttpClient) { }

    getAllMealByFirstLetter(firstLetter: string) {
        return this.http.get<any>(this.urlService, {
            params: {
                f: firstLetter
            }
        });
    }
}
