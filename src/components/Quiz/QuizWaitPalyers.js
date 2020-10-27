import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import { useSelector } from 'react-redux'
import { QuizContext } from '../../context/quiz/quizContext'
import { build } from '../../utils/quiz/packetUtils'
import { packets } from '../../utils/quiz/packets'
import { actions } from '../../utils/quiz/actions'
import { useQuizNotification } from '../../hooks/quizNotification.hook'

const QuizWaitPlayers = () => {
    const time = useSelector(state => state.game.startTime)
    const [startTime, setStartTime] = useState(0)
    const boosters = useSelector(state => state.user.boosters)
    const { create } = useQuizNotification()
    const { ws } = useContext(QuizContext)
    const [showNotification, setShowNotification] = useState(false)

    const transformTime = () => {
        const minutes = Math.trunc(startTime / 60)
        const seconds = startTime % 60

        return startTime
            ? `0${minutes}:${seconds <= 9 ? `0${seconds}` : seconds}`
            : 'Викторина вот-вот начнется'
    }

    const pressUseBoosterIq = () => ws.send(build(packets.client.ClientCommands, { id: actions.useBoosterIq }))

    useEffect(() => {
        if (time) {
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
        }
    }, [startTime, time])

    useEffect(() => {
        setStartTime(time)
    }, [time])

    useEffect(() => {
        const booster = boosters.find(item => item.booster._id === '5f809d93a45be03a7c248b98')
        if (booster) {
            setShowNotification(true)
            create('Вы хотите применить бустер ускорения IQ?', pressUseBoosterIq, showNotification)
        }
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
