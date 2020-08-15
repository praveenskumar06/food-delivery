import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../_models/user';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`http://localhost:8080/users/all`);
    }

    save(user: User): Observable<User> {
        return this.http.post<User>(`http://localhost:8080/users/`, user, this.httpOptions);
    }
    validateUsers(username: string, password: string): Observable<string> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('username', username).append('password', password);
        return this.http.get<string>(`http://localhost:8080/users/validate`, {
            params : httpParams
        });
      }
}

