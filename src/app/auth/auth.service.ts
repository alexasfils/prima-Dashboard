import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class AuthService{
    isLoggedIn = true;


    constructor( private router: Router) { }
    
    isAuthenticated() {
        if (this.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/login'])
            return false;
        }
    }
}