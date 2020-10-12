import { useSelector } from 'react-redux'

export const useHttp = () => {
    const baseUrl = 'http://192.168.1.68:3000/api'

    const get = async (path, isAuth = false) => {
        const headers = {}

        if (isAuth) {
            headers.Authorization = `Bearer ${token}`
        }

        const data = await fetch(`${baseUrl}${path}`, { headers })
        const { response } = await data.json()

        if (response)
            return response
    }

    const post = async (path, body = null, isAuth) => {
        const headers = {}

        if (body) {
            body = JSON.stringify(body)
            headers['content-type'] = 'application/json'
        }

        if (isAuth) {
            headers.Authorization = `Bearer ${token}`
        }

        const data = await fetch(`${baseUrl}${path}`, { method: 'POST', headers, body })
        const { response } = await data.json()

        if (response)
            return response
    }

    return { get, post }
}
