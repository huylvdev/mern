
import { URL } from '../config/url';
const fetApi = async (method, reqName, body) => {

    let URLFetch = `${URL}${reqName}`
    var response = await fetch(URLFetch, {
        method: method,
        headers: {
            'Authorization': null,
            'Content-Type': 'application/json',
        },
        body: method == 'POST' ? body : null,
    });
    var data = await response.json();

    return data
}

const get = (reqName) => {
    let r = fetApi('GET', reqName)
    return r
}

const post = (reqName, reqData) => {
    console.log('inpost')
    let r = fetApi('POST', reqName, reqData)
    return r
}

export { get, post }