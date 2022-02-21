import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../constants/api';

@Injectable({
    providedIn: 'root'
})
export class ListAllMealCategoriesService {
    urlService = `${url}categories.php`;

    constructor(private http: HttpClient) { }

    getAllMealCategories() {
        return this.http.get<any>(this.urlService);
    }
}
