import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import HeaderQuiz from '../components/Quiz/HeaderQuiz'
import QuestionsQuiz from '../components/Quiz/QuestionsQuiz'
import QuizChat from '../components/Quiz/QuizChat'
import { QuizContext } from '../context/quiz/quizContext'
import { packets } from '../utils/quiz/packets'
import { build, parse } from '../utils/quiz/packetUtils'
import QuizWaitPlayers from '../components/Quiz/QuizWaitPalyers'
import { useSelector } from 'react-redux'
import { usePackets } from '../hooks/packets.hook'
import QuizEnding from '../components/Quiz/QuizEnding'

const QuizScreen = () => {
    const { ws } = useContext(QuizContext)
    const { dispatchPacket } = usePackets()
    const status = useSelector(state => state.game.status)

    const openHandler = () => {
        ws.send(build(packets.client.Login, { token: '' }))
    }

    const messageHandler = ({ data }) => {
        const { id, payload } = parse(data)
        dispatchPacket(id, payload)
    }

    const errorHandler = () => {}

    useEffect(() => {
        ws.addEventListener('open', openHandler)
        ws.addEventListener('message', messageHandler)
        ws.addEventListener('error', errorHandler)

        return () => {
            ws.removeEventListener('open', openHandler)
            ws.removeEventListener('message', messageHandler)
            ws.removeEventListener('error', errorHandler)
        }
    }, [])

    return (
        <View style={styles.wrapper}>
            <View
                style={status === 1 ? styles.container : styles.containerFullScreen}
            >
                <HeaderQuiz/>
                {
                    status === 1
                    ? <QuizWaitPlayers/>
                    : <QuestionsQuiz/>
                }
                <QuizChat/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.background.default,
        alignItems: 'center'
    },
    container: {
        alignItems: 'center',
        width: 290
    },
    containerFullScreen: {
        alignItems: 'center',
        width: 290,
        height: '100%'
    }
})

export default QuizScreen
