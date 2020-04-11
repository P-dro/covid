import { CovidData } from '../../../models/covid-data.model'

export interface CovidState {
    data: CovidData[],
    loading: boolean
}

export interface CovidFeature {
    data: CovidData[]
}

export const initialState = {
    data: null,
    loading: false
}