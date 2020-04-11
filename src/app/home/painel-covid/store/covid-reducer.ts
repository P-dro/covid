import { createReducer, on, createFeatureSelector, createSelector } from "@ngrx/store";

import { initialState, CovidState, CovidFeature } from './covid-state';
import { getCovid, getCovidSuccess } from './covid-action';


const _covidReducer = createReducer(initialState,
    on(getCovid, (state): CovidState => Object.assign({}, state, { loading: true })),
    on(getCovidSuccess, (state, action): CovidState => Object.assign({}, state, {
        data: action.results,
        loading: false
    }))
);

export function covidReducer(state, action) {
    return _covidReducer(state, action);
};

export const getCovidFeature = createFeatureSelector<CovidFeature>('covid');

export const getCovidState = createSelector(
    getCovidFeature,
    (state) => state.data
)



