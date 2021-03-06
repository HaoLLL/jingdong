import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/4d785425dc0341fa88443e6a8c6290db/jd/',
    timeout: 10000
})
export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params }).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}
export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}
