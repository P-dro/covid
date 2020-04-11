import { CovidData } from '../../../models/covid-data.model'

export interface CovidState {
    covid: CovidData[],
    loading: boolean
}

export interface CovidFeature {
    covid: CovidState
}

export const initialState = {
    covid: null,
    loading: false
}