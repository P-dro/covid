import { Injectable } from "@angular/core";

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, tap, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { PainelCovidService } from '../../painel-covid.service';
import { getCovid, getCovidSuccess } from './covid-action';

@Injectable()

export class CovidEffect {

    constructor(
        private actions$: Actions,
        private painelCovidService: PainelCovidService,
    ) {

    }

    getCovid$ = createEffect(() => this.actions$.pipe(
        ofType(getCovid),
        mergeMap(() => this.painelCovidService.getCovidData()
            .pipe(
                map((response: any) => getCovidSuccess(response)),
                catchError(() => EMPTY)
            ))
    ))
} 