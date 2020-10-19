import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AnswerItem from './AnswerItem'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const QuestionsQuiz = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.questionsCount}>2 из 12 вопросов</Text>
            <Text style={styles.question}>В каком году бы основан город Ярославль?</Text>
            <View style={styles.answersWrapper}>
                <AnswerItem isActive={true}>1010</AnswerItem>
                <AnswerItem>1048</AnswerItem>
                <AnswerItem>1210</AnswerItem>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 15
    },
    questionsCount: {
        fontFamily: fonts.semiBold,
        color: colors.font.questionCount,
        fontSize: 12
    },
    question: {
        fontFamily: fonts.bold,
        color: colors.font.default,
        fontSize: 24
    },
    answersWrapper: {
        marginTop: 30
    }
})

export default QuestionsQuiz
