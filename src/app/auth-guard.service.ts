import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs-compat";
import { AuthService } from "./auth-service.service";

//CanActivate interface forces service to implement the CanActivate method

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private authService: AuthService,
        private router: Router) {

    }
    //canActivate method takes 2 args of type ActivatedRouteSnapshot & RouterStateSnapshot
    //which returns either an observable, a promise or a boolean
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            );
    }
}