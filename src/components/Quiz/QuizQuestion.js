import React, { useEffect } from 'react'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { useSelector } from 'react-redux'
import QuizAnswers from './QuizAnswers'
import Sound from 'react-native-sound'

const QuizQuestion = () => {
    const { totalQuestions, question } = useSelector(state => state.game)

    useEffect(() => {
        if (question) {
            const sound = new Sound('new_question.mp3', Sound.MAIN_BUNDLE, () => sound.play())
        }
    }, [question])

    return (
        <View style={question ? styles.wrapper : styles.wrapperLoading}>
            {
                question
                    ? <>
                        <Text style={styles.questionsCount}>{question.currentQuestionNumber} из {totalQuestions} вопросов</Text>
                        <Text style={{
                            ...styles.question,
                            fontSize: (34 - (question.title.length / 80 * 16))
                        }}>{question.title}</Text>
                        <QuizAnswers/>
                    </>
                    : <ActivityIndicator
                        color={colors.background.loader}
                        size="large"
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 15,
        height: 310
    },
    wrapperLoading: {
        marginTop: 15,
        height: 310,
        alignItems: 'center',
        justifyContent: 'center'
    },
    questionsCount: {
        fontFamily: fonts.semiBold,
        color: colors.font.questionCount,
        fontSize: 12
    },
    question: {
        fontFamily: fonts.bold,
        color: colors.font.default,
        height: 110,
        width: 290,
        marginTop: 10
    }
})

export default QuizQuestion
