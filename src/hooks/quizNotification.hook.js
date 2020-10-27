import { Alert } from 'react-native'
import { useCallback } from 'react'

export const useQuizNotification = () => {
    const create = useCallback((message, pressHandler, visible) => {
        Alert.alert(
            'Уведомление',
            message,
            [
                {
                    text: 'Закрыть',
                    style: 'cancel'
                },
                {
                    text: 'Применить',
                    onPress: () => pressHandler()
                }
            ],
            { cancelable: true, visible}
        )
    }, [])

    return { create }
}
