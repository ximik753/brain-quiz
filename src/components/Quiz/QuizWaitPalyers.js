import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import { useSelector } from 'react-redux'
import { QuizContext } from '../../context/quiz/quizContext'
import { build } from '../../utils/quiz/packetUtils'
import { packets } from '../../utils/quiz/packets'
import { actions } from '../../utils/quiz/actions'
import QuizNotification from './QuizNotification'
import { boosters } from '../../utils/quiz/boosters'

const QuizWaitPlayers = () => {
    const time = useSelector(state => state.game.startTime)
    const [startTime, setStartTime] = useState(0)
    const userBoosters = useSelector(state => state.user.boosters)
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
        const booster = userBoosters.find(item => item.booster._id === boosters.boosterIq)
        if (booster) {
            setShowNotification(true)
        }

        return () => setShowNotification(false)
    }, [])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.titleTimer}>Ожидаем игроков:</Text>
            <Text style={styles.timer}>{transformTime()}</Text>
            <QuizNotification
                show={showNotification}
                pressHandler={pressUseBoosterIq}
                closeHandler={() => setShowNotification(false)}
            >
                Вы хотите применить бустер ускорения IQ?
            </QuizNotification>
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
