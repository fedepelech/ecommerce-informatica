import * as axios from 'axios';
import Papa from 'papaparse';

export const listArticles = () => {
    return axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSO70MqvmTsFOF4OMVawTc14_yoitYHNHiUSFSp3tGi-cTHuaF0jBsQfOgeiKKU48DQzFoCSkUh_FDo/pub?output=csv'
    )
        .then((response) => {
            return new Promise((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: results => resolve(results.data)
                })
            })
        })
}

const listM2Ssd = () => {
    return axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vRY8tJOpdiXTJdkxuCKTEcq3sEcKKP7zSvFb3tNbatwd0Z6421uX8HmjRYu-ELHXwqYsqKU60gXGtFK/pub?output=csv'
    )
        .then((response) => {
            return new Promise((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: results => resolve(results.data)
                })
            })
        })  
}

const listSataSsd = () => {
    return axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vRf7iPNCyNdXfzbtOgWU04O2GhkQGChocwe_lhb_Gt7lQPVKdfZ-0Qdf1eZ-lWjcaGcWrNCGnee216X/pub?output=csv'
    )
        .then((response) => {
            return new Promise((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: results => resolve(results.data)
                })
            })
        })  
}

const listRamsPc = () => {
    return axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQWT4k8kX5Xz7RQNh3v3Iz4iOxWzE9GMWDyP8DHvkk0AKmuMO-18D8EUYgmkhxj81q3ig5YMqN2zbqV/pub?output=csv'
    )
        .then((response) => {
            return new Promise((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: results => resolve(results.data)
                })
            })
        })  
}

const listMonitores = () => {
    return axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQvLbdGk_43mZ5Qvs94F8hHKXByhctaXujJuW-zylcQR91wKB2Nx-M4VtJUzuSWHIMKT4cJN5C8dFAF/pub?output=csv'
    )
        .then((response) => {
            return new Promise((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: results => resolve(results.data)
                })
            })
        })
}

const listFuentes = () => {
    return axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vT4sgh2pObI2swyCD6qval85XyMpHMqaFlKWf3IL0wGNB3d4oNYAkXACPkbr1OPwOmMSdMiNr0ZPr5N/pub?output=csv'
    )
        .then((response) => {
            return new Promise((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: results => resolve(results.data)
                })
            })
        })
}

export const getData = (category) => {
    switch(category) {
        case 'ssd-sata':
            return listSataSsd();
        case 'ssd-m2':
            return listM2Ssd();
        case 'ram':
            return listRamsPc();
        case 'monitores':
            return listMonitores();
        case 'fuentes':
            return listFuentes();
        default:
            return null;
    }
}

export default {
    getData
}