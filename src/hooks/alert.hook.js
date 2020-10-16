import { Alert } from 'react-native'
import { useCallback } from 'react'

export const useAlert = () => {

    const create = useCallback((error) => {
        Alert.alert(
            'Ошибка',
            error,
            [
                {
                    text: 'Закрыть',
                    style: 'cancel'
                }
            ],
            { cancelable: false }
        )
    }, [])

    return { create }
}
