import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import { useSelector } from 'react-redux'

const QuizWaitPlayers = () => {
    const [startTime, setStartTime] = useState(useSelector(state => state.game.startTime))
    const minutes = Math.trunc(startTime / 60)
    const seconds = startTime % 60

    const transformTime = () => startTime
        ? `0${minutes}:${seconds <= 9 ? `0${seconds}` : seconds}`
        : 'Викторина вот-вот начнется'

    useEffect(() => {
        const id = setInterval(() => {
            return setStartTime(prevState => {
                if (prevState > 0) {
                    return prevState - 1
                }

                clearInterval(id)
                return prevState
            })
        }, 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.titleTimer}>Ожидаем игроков:</Text>
            <Text style={styles.timer}>{transformTime()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: '50%',
        justifyContent: 'center'
    },
    titleTimer: {
        textAlign: 'center',
        color: colors.font.default,
        fontFamily: fonts.medium,
        fontSize: 21
    },
    timer: {
        textAlign: 'center',
        color: colors.font.default,
        fontFamily: fonts.bold,
        fontSize: 31
    }
})

export default QuizWaitPlayers
