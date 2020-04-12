const CONTEXTO = 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com';

const GET_COVID_SERVICE = `${CONTEXTO}/prod/PortalMapa`;

export const environment = {
  production: true,
  covidService: GET_COVID_SERVICE
};
