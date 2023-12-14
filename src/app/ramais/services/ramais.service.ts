import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ramais } from '../model/ramais';
import { RamalPage } from '../model/ramal-page';

@Injectable({
  providedIn: 'root'
})

export class RamaisService {
  private readonly API = '/api/ramais-list';

  constructor(private httpClient: HttpClient) {
  }

  list(serial: boolean | string, page: number, size: number) {
    if (serial) {
      return this.httpClient.get<RamalPage>(this.API, { params: { serial } });
    }
    return this.httpClient.get<RamalPage>(this.API, { params: { page, size } });
  }

  save(record: Partial<Ramais>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Ramais>) {
    return this.httpClient.post<Ramais>(this.API, record);
  }

  private update(record: Partial<Ramais>) {
    return this.httpClient.put<Ramais>(`${this.API}/${record.id}`, record)
  }

  loadById(id: string) {
    return this.httpClient.get<Ramais>(`${this.API}/${id}`);
  }

  loadBySearch(id: string) {
    return this.httpClient.get<Ramais[]>(`${this.API}/${id}`);
  }

  deleteById(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}