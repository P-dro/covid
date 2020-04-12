import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PainelCovidComponent } from './home/painel-covid/painel-covid.component';
import { HttpInterceptorModule } from './interceptors/http-interceptor.module'
import { covidReducer } from './home/painel-covid/store/covid-reducer';
import { CovidEffect } from './home/painel-covid/store/covid-effect';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PainelCovidService } from './home/painel-covid.service';
import { NewsletterComponent } from './home/newsletter/newsletter.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelCovidComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpInterceptorModule,
    StoreModule.forRoot({ covid: covidReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([
      CovidEffect
    ])
  ],
  providers: [
    PainelCovidService
  ],
  bootstrap: [
    AppComponent,
    PainelCovidComponent
  ]

})
export class AppModule { }
