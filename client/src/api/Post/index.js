import { get } from '../../helper/fetch';

const getPost = (id) => {
    let reqName = `getbyid/${id}`
    let r = get(reqName)
    return r
}

export { getPost }