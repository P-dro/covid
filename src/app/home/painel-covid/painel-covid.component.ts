import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CovidState, CovidFeature } from './store/covid-state';
import { getCovid } from './store/covid-action';
import { CovidData } from 'src/app/models/covid-data.model';
import { getCovidState } from './store/covid-reducer';
import * as Highcharts from 'highcharts';
import * as Proj4 from 'proj4';


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
    //this.covidData$ = this.store.select(getCovidState)
    console.log(this.covidData$)
    this.createChart();
  }

  createChart() {
    this.store.select(getCovidState)
      .subscribe((data: any) => {
        if (data) {
          let ArrayConvert = []
          let objectHighcharts = {
            stateNome: [],
            cases: [],
            deaths: [],
            lethality: []
          }

          let arrayStates = [];
          let cases = [];
          let deaths = [];
          let lethality = [];

          console.log(data)
          for (let index = 0; index < 27; index++) {
            const element = data[index];
            ArrayConvert.push(element)
            arrayStates.push(element.nome)
            cases.push(element.qtd_confirmado)
            deaths.push(element.qtd_obito)
            lethality.push(parseInt(element.letalidade))
          }
          objectHighcharts.stateNome = arrayStates;
          objectHighcharts.cases = cases;
          objectHighcharts.deaths = deaths;
          objectHighcharts.lethality = lethality;

          Highcharts.chart('container', {
            chart: {
              type: 'column'
            },
            title: {
              text: 'Covid 19 - Brasil'
            },
            subtitle: {
              text: 'Fonte: Ministério da Saúde - Brasil'
            },
            xAxis: {
              categories: objectHighcharts.stateNome
            },
            yAxis: {
              title: {
                text: 'Casos / Mortes'
              }
            },
            tooltip: {
              stickOnContact: false
            },
            series: [{
              name: 'Casos',
              data: objectHighcharts.cases,
              type: 'column'
            }, {
              name: 'Mortes',
              data: objectHighcharts.deaths,
              type: 'column'
            }],
            responsive: {
              rules: [{
                condition: {
                  maxWidth: 500
                },
                chartOptions: {
                  chart: {
                    type: 'bar'
                  },
                  legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                  },
                  yAxis: {
                    labels: {
                      align: 'left',
                      x: 5,
                      y: 0
                    },
                    title: {
                      text: null
                    }
                  },
                  subtitle: {
                    text: null
                  },
                  credits: {
                    enabled: false
                  }
                }
              }]
            }

          })
          this.createLethality(objectHighcharts)
        }
      });


  }

  createLethality(lethality) {
    Highcharts.chart('containerLethality', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Letalidade'
      },
      subtitle: {
        text: 'Fonte: Ministério da Saúde - Brasil'
      },
      xAxis: {
        categories: lethality.stateNome
      },
      yAxis: {
        title: {
          text: 'Letalidade'
        }
      },
      series: [{
        name: 'Letalidade',
        data: lethality.lethality,
        type: 'spline',
        tooltip: {
          pointFormat: 'Taxa de letalidade: <b>{point.y}%</b><br>'
        }
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            chart: {
              type: 'bar'
            },
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          },
        }]
      }
    })
  }

}
