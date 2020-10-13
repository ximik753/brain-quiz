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
        const { response } = await data.json()
        setLoading(false)

        if (response)
            return response
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
        const { response } = await data.json()
        setLoading(false)

        if (response)
            return response
    }

    return { get, post, loading }
}
