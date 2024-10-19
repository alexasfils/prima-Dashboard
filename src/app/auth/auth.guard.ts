import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";



@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) { }
    
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
    
}