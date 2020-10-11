export const useHttp = () => {
    const baseUrl = 'http://192.168.1.68:3000/api'

    const get = async (path, isAuth = false) => {
        const headers = {}

        if (isAuth) {
            headers.Authorization = 'Bearer'
        }

        const response = await fetch(`${baseUrl}${path}`, { headers })
        return await response.json()
    }

    const post = async (path, body = null, isAuth) => {
        const headers = {}

        if (body) {
            body = JSON.stringify(body)
            headers['content-type'] = 'application/json'
        }

        if (isAuth) {
            headers.Authorization = 'Bearer'
        }

        const response = await fetch(`${baseUrl}${path}`, { method: 'POST', headers, body })
        return await response.json()
    }

    return { get, post }
}
