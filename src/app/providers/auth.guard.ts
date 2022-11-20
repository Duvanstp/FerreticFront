import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";


@Injectable()

export class AuthGuard implements CanActivate
{
  constructor(private router: Router, private api:ApiService) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree{
    if (this.api.usuario) {
      return true;
    } else {
      this.router.navigate(['/Login'])
      return false;
    }
  }

}
