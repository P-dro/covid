import { createAction } from '@ngrx/store';

import { CovidDataResponse } from '../../../models/covid-data.model'

export const getCovid = createAction('[Covid] getCovid');
export const getCovidSuccess = createAction('[Covid] getCovidSuccess', (response: CovidDataResponse) => (response));


