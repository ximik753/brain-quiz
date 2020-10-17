import { useCallback, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import { setUserToken } from '../store/actions/user'

export const useLogin = () => {
    const [ready, setReady] = useState(false)
    const dispatch = useDispatch()
    const STORAGE_KEY = '@token'

    const registerToken = useCallback(async (token) => {
        await AsyncStorage.setItem(STORAGE_KEY, token)
    }, [])

    const removeToken = useCallback(async () => {
        await AsyncStorage.removeItem(STORAGE_KEY)
        dispatch(setUserToken(null))
    }, [])

    const autoLogin = useCallback(async () => {
        const token = await AsyncStorage.getItem(STORAGE_KEY)

        if (token)
            dispatch(setUserToken(token))

        setTimeout(() => setReady(true), 2000)
    }, [dispatch])

    return { registerToken, removeToken, autoLogin, ready }
}
