import { QuizContext } from './quizContext'
import React, {  useReducer } from 'react'
import { quizReducer } from './quizReducer'

export const QuizState = ({ children }) => {
    const [state, _] = useReducer(quizReducer, new WebSocket('ws://192.168.1.68:8080'))

    return (
        <QuizContext.Provider value={{
            ws: state
        }}>
            {children}
        </QuizContext.Provider>
    )
}
