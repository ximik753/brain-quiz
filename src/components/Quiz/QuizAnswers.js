import React, { Fragment, useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import AnswerItem from './AnswerItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectAnswer, setIqAnswers, setUseExtraLifeBooster } from '../../store/actions/game'
import { build } from '../../utils/quiz/packetUtils'
import { packets } from '../../utils/quiz/packets'
import { actions } from '../../utils/quiz/actions'
import { QuizContext } from '../../context/quiz/quizContext'
import { boosters } from '../../utils/quiz/boosters'
import QuizNotification from './QuizNotification'

const QuizAnswers = () => {
    const { question, answer, selectedAnswer, iqAnswer, totalQuestions, useExtraLifeBooster } = useSelector(state => state.game)
    const dispatch = useDispatch()
    const { ws } = useContext(QuizContext)
    const userBoosters = useSelector(state => state.user.boosters)
    const [showNotification, setShowNotification] = useState(false)

    const pressUseBoosterExtraLife = () => {
        setShowNotification(false)
        ws.send(build(packets.client.ClientCommands, { id: actions.useExtraLife }))
        dispatch(setIqAnswers(true))
        dispatch(setUseExtraLifeBooster())
    }

    useEffect(() => {
        if (answer.questionId === question.id
            && answer.id !== selectedAnswer
            && iqAnswer
            && totalQuestions !== question.currentQuestionNumber
        ) {
            const booster = userBoosters.find(item => item.booster._id === boosters.extraLife)
            if (booster && !useExtraLifeBooster) {
                setShowNotification(true)
            }

            dispatch(setIqAnswers(false))

            return () => setShowNotification(false)
        }
    }, [answer, question.id])

    useEffect(() => {
        dispatch(selectAnswer(null))
    }, [question])

    return (
        <>
            <View style={styles.answersWrapper}>
                {
                    (answer.questionId === question.id)
                        ? question.answers.map(({ text, _id }) => (
                            <Fragment key={_id}>
                                <AnswerItem
                                    id={_id}
                                    btnStyle={answer.id === _id ? 'right' : selectedAnswer === _id ? 'wrong' : ''}
                                    disabled={true}
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
            <QuizNotification
                show={showNotification}
                pressHandler={pressUseBoosterExtraLife}
                closeHandler={() => setShowNotification(false)}
            >
                Вы хотите применить бустер доп. жизнь?
            </QuizNotification>
        </>
    )
}

const styles = StyleSheet.create({
    answersWrapper: {
        marginTop: 10
    }
})

export default QuizAnswers
