import axios from 'axios'
export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            baseURL: 'https://www.fastmock.site/mock/4d785425dc0341fa88443e6a8c6290db/jd/',
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
