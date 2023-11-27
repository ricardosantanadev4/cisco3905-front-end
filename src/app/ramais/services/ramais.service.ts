import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ramais } from '../model/ramais';

@Injectable({
  providedIn: 'root'
})

export class RamaisService {
  private readonly API = '/api/ramais-list';

  constructor(private httpClient: HttpClient) {
  }

  list(event: string) {
    if (event) {
      const parametro = '?serial=' + event;
      return this.httpClient.get<Ramais[]>(`${this.API}` + parametro);
    }
    return this.httpClient.get<Ramais[]>(this.API);
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