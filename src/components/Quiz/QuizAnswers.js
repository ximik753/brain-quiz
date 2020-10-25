import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import AnswerItem from './AnswerItem'
import { useSelector } from 'react-redux'

const QuizAnswers = () => {
    const { question, answer, selectedAnswer } = useSelector(state => state.game)

    return (
        <>
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
    )
}

const styles = StyleSheet.create({
    answersWrapper: {
        marginTop: 10
    }
})

export default QuizAnswers
