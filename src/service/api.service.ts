import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country} from '../store/country/country.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCountries() {
    return this.httpClient.get("https://restcountries.eu/rest/v2/all")
  }

}
