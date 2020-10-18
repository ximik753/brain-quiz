import { useSelector } from 'react-redux'
import { useState } from 'react'

export const useHttp = () => {
    const token = useSelector(state => state.user.token)
    const baseUrl = 'https://brain-quiz-server.herokuapp.com/api'
    const [loading, setLoading] = useState(false)

    const get = async (path, isAuth = false) => {
        const headers = {}
        setLoading(true)

        if (isAuth)
            headers.Authorization = `Bearer ${token}`

        const data = await fetch(`${baseUrl}${path}`, { headers })
        const json = await data.json()
        setLoading(false)

        if (!data.ok)
            throw new Error(json.error)

        return json.response
    }

    const post = async (path, body = null, isAuth) => {
        const headers = {}
        setLoading(true)

        if (body) {
            body = JSON.stringify(body)
            headers['content-type'] = 'application/json'
        }

        if (isAuth)
            headers.Authorization = `Bearer ${token}`

        const data = await fetch(`${baseUrl}${path}`, { method: 'POST', headers, body })
        const json = await data.json()
        setLoading(false)

        if (!data.ok)
            throw new Error(json.error)

        return json.response
    }

    return { get, post, loading }
}
