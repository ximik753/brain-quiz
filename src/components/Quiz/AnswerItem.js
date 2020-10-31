import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import { QuizContext } from '../../context/quiz/quizContext'
import { build } from '../../utils/quiz/packetUtils'
import { packets } from '../../utils/quiz/packets'
import { actions } from '../../utils/quiz/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectAnswer } from '../../store/actions/game'

const AnswerItem = ({ children, btnStyle, id, disabled }) => {
    const { ws } = useContext(QuizContext)
    const [style, setStyle] = useState('')
    const dispatch = useDispatch()
    const { selectedAnswer } = useSelector(state => state.game)

    const pressHandler = () => {
        setStyle('selected')
        dispatch(selectAnswer(id))
        ws.send(build(packets.client.ClientCommands, { id: actions.sendAnswer, data: { id } }))
    }

    const noop = () => {}

    return (
        <TouchableOpacity
            onPress={(selectedAnswer || disabled) ? noop : pressHandler}
            activeOpacity={1.0}
        >
            <View style={{ ...styles.answer, ...styles[btnStyle || style || ''] }}>
                <Text style={styles.answerText}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    answer: {
        width: 290,
        height: 40,
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: 'rgba(239, 239, 239, .3)',
        borderRadius: 50,
        marginBottom: 15
    },
    selected: {
        backgroundColor: colors.background.selectedAnswer
    },
    right: {
        backgroundColor: colors.background.rightAnswer
    },
    wrong: {
        backgroundColor: colors.background.wrongAnswer
    },
    answerText: {
        fontFamily: fonts.semiBold,
        color: colors.font.default,
        fontSize: 17
    }
})

export default AnswerItem
