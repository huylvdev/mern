import { get } from '../../helper/fetch';

const getHome = () => {
    let reqName = 'post/0/40'
    let r = get(reqName)
    return r
}

export { getHome }