import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PainelCovidService {

  constructor(
    private http: HttpClient
  ) { }

  getCovidData() {
    return this.http.get(environment.covidService);
  }
}
