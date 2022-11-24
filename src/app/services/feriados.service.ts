import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor( public _http: HttpClient) { }

  getData<T> (url : string) {
    url = 'https://api.victorsanmartin.com/feriados/en.json'
    return this._http.get<T[]>(url);
  }
}
