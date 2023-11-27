import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ramais } from '../model/ramais';
import { RamaisService } from '../services/ramais.service';

@Injectable({
  providedIn: 'root'
})
export class RamaisResolver implements Resolve<Ramais> {

  constructor(private ramaisService: RamaisService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ramais> {
    if (route.params && route.params['id']) {
      return this.ramaisService.loadById(route.params['id']);
    }
    return of({ id: '', ramal: '', passWord: '', serialNumber: '', ipCentral: '', status: '' });
  }
} 