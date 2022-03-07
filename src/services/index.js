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

const listAuriculares = () => {
    return axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSl01KnRLJczsD-1LgO3sCyW5SR-GqTxeeDVyTcpGT5EZLL3gDfvL3ajKV3FneUHcF4_nLox8I3SWP-/pub?output=csv'
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

const listTeclados = () => {
    return axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxIL48OEKBH3yFDi4xSBZKnihKam-hPsOhCtErx4n0MzHg1NyWBauyupjAebBh4rFIJAUL1r4PNDSy/pub?output=csv'
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

const listParlantes = () => {
    return axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhXQImfc_AOBRTnovOGPTt965axb4ZZi2kJQOhjTXdXuS-pNcUZz-yG7yAGPeGQ-KySvRzk2yc_0Pg/pub?output=csv'
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
        case 'auriculares':
            return listAuriculares();
        case 'teclados':
            return listTeclados();
        case 'parlantes':
            return listParlantes();
        default:
            return null;
    }
}

export default {
    getData
}
