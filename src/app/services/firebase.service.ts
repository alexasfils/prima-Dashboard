import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

url = 'https://primodashboard-default-rtdb.europe-west1.firebasedatabase.app/elementi'

  constructor(private http: HttpClient, private authService: AuthService) { }

  insertElement(body: {}) {
    return this.http.post(`${this.url}.json`, body);
  }

  getElements(): Observable<any> {
    return this.http.get(`${this.url}.json`)
  }
}
