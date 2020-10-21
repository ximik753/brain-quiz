import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import QuizTimer from './QuizTimer'
import { useSelector } from 'react-redux'
import { QuizContext } from '../../context/quiz/quizContext'
import { packets } from '../../utils/quiz/packets'
import { actions } from '../../utils/quiz/actions'
import { build } from '../../utils/quiz/packetUtils'

const HeaderQuiz = () => {
    const online = useSelector(state => state.game.online)
    const { ws } = useContext(QuizContext)

    useEffect(() => {
        const id = setInterval(() => {
            ws.send(build(packets.client.ClientCommands, { id: actions.online }))
        }, 5000)

        return () => clearInterval(id)
    }, [])

    return (
        <View style={styles.wrapper}>
            <View style={styles.onlineWrapper}>
                <MaterialIcons
                    name="visibility"
                    color={colors.font.default}
                    size={20}
                />
                <Text style={styles.onlineCount}>{online}</Text>
            </View>
            <QuizTimer/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    onlineWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    onlineCount: {
        fontFamily: fonts.bold,
        color: colors.font.default,
        fontSize: 18,
        marginLeft: 10
    }
})

export default HeaderQuiz
