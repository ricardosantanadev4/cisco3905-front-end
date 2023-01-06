import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';
import { Ramais } from '../model/ramais';

@Injectable({
  providedIn: 'root'
})

export class RamaisService {
  ramais: Ramais[] = [{ id: '1', ramal: '6001', serialNumber: 'lzk606895', ipCentral: '192.168.10.1' }];
  private readonly API = 'http://localhost:3000/values';

  constructor(private httpClient: HttpClient) {
  }

  getRamis() {
    return this.httpClient.get<Ramais[]>(this.API).pipe(
      // delay(2000),
      //  first() se inscreve no observable e assim que receber a primeira respos se desincreve do observable
      // first()
    );
  }
}
