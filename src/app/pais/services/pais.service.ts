import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string ='https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }


  buscarPais(termino:string):Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
  }


  buscarCapital(capital:string):Observable<Country[]>{

    const urlCapital = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(urlCapital);
  }

  buscarPaisPorCodigo(id:string):Observable<Country>{

    const urlPaisPorCodigo = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(urlPaisPorCodigo);
  }

  buscarPorRegion(region:string):Observable<Country[]>{
    const urlPorRegion = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(urlPorRegion);
  }
}
