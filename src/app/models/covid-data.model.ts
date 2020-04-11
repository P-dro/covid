export interface CovidData {
    objectId: string,
    nome: string,
    qtd_confirmado: number,
    latitude: string,
    longitude: string,
    createdAt: Date,
    updatedAt: Date,
    percent: string,
    letalidade: string,
    qtd_obito: number
}


export interface CovidDataResponse {
    results: CovidData[]
}

