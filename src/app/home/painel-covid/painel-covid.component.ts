import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CovidState } from './store/covid-state';
import { getCovid } from './store/covid-action';
import { CovidData } from 'src/app/models/covid-data.model';
import { getCovidState } from './store/covid-reducer';


@Component({
  selector: 'app-painel-covid',
  templateUrl: './painel-covid.component.html',
  styleUrls: ['./painel-covid.component.scss']
})
export class PainelCovidComponent implements OnInit {

  covidData$: Observable<CovidData[]>

  constructor(
    private store: Store<CovidState>
  ) { }

  ngOnInit() {
    this.store.dispatch(getCovid());
    this.covidData$ = this.store.select(getCovidState)
    console.log(this.covidData$)
  }

}
