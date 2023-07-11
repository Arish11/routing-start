import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


//This interface is added to ensure that the component received in CanDeactivateGuard has a canDeactivate method implemented in it
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component : CanComponentDeactivate,
                  route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{

                    return component.canDeactivate()
        
    }
}