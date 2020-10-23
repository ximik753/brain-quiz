import React, { Fragment } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AnswerItem from './AnswerItem'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { useSelector } from 'react-redux'

const QuestionsQuiz = () => {
    const { question, answer, selectedAnswer, totalQuestion } = useSelector(state => state.game)

    return (
        <View style={styles.wrapper}>
            <Text style={styles.questionsCount}>1 из {totalQuestion} вопросов</Text>
            {
                question
                && <>
                    <Text style={styles.question}>{question.title}</Text>
                    <View style={styles.answersWrapper}>
                        {
                            (answer.questionId === question.id)
                                ? question.answers.map(({ text, _id }) => (
                                    <Fragment key={_id}>
                                        <AnswerItem
                                            id={_id}
                                            disable={true}
                                            btnStyle={answer.id === _id ? 'right' : selectedAnswer === _id ? 'wrong' : ''}
                                        >
                                            {text}
                                        </AnswerItem>
                                    </Fragment>
                                ))
                                : question.answers.map(({ text, _id }) => (
                                    <Fragment key={_id}>
                                        <AnswerItem id={_id}>{text}</AnswerItem>
                                    </Fragment>
                                ))
                        }
                    </View>
                </>
            }
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
