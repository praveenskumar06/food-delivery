import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../_models/user';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../_models/food';



@Injectable({ providedIn: 'root' })
export class FoodService {


    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

      getAll(restaurantId: string): Observable<Food[]> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('restaurantId', restaurantId);
        return this.http.get<Food[]>(`http://localhost:8080/food/byrestaurant`, {
            params : httpParams
        });
    }

    getByKeyword(id: string, foodKeyword: string) : Observable<Food[]> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('foodName', foodKeyword)
        .append('restaurantId', id);
        return this.http.get<Food[]>(`http://localhost:8080/food/fooddetails`, {
            params : httpParams
        });
      }
}
