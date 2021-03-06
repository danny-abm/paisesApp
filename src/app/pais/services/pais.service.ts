import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Capital } from '../interfaces/capital.interface';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  
  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population')
  }
 
  constructor( private http: HttpClient ) { }
  
  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string):Observable<Country[]>{
    const urlCapital = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(urlCapital, { params: this.httpParams });

  }

  getPaisAlpha(id: string):Observable<Country>{
    const urlAlpha = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(urlAlpha);

  }

  getPaisRegion(region:string):Observable<Country[]>{

    const urlRegion = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(urlRegion, { params: this.httpParams });

  }
}
