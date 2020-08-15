import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../_models/restaurant';



@Injectable({ providedIn: 'root' })
export class RestaurantService {
    
    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    getAll(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`http://localhost:8080/restaurant/all`);
    }

    getByRating(rating: string): Observable<Restaurant[]> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('rating', rating);
        return this.http.get<Restaurant[]>(`http://localhost:8080/restaurant/rating`, {
            params : httpParams
        });
    }
    getByLocation(location: string): Observable<Restaurant[]> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('location', location);
        return this.http.get<Restaurant[]>(`http://localhost:8080/restaurant/location`, {
            params : httpParams
        });
    }


    getByLocationAndRating(rating: string, location: string): Observable<Restaurant[]> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('location', location).append('rating', rating);
        return this.http.get<Restaurant[]>(`http://localhost:8080/restaurant/locationandrating`, {
            params : httpParams
        });
    }

    getByKeyword(rating: string, keyword: string) {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('keyword', keyword).append('rating', rating);
        return this.http.get<Restaurant[]>(`http://localhost:8080/restaurant/searchKeyword`, {
            params : httpParams
        });
      }
}