export interface CovidData {
    objectId: string,
    nome: string,
    casosAcumulado: number,
    latitude: string,
    longitude: string,
    createdAt: Date,
    updatedAt: Date,
    percent: string,
    letalidade: string,
    obitosAcumulado: number
}


export interface CovidDataResponse {
    results: CovidData[]
}

