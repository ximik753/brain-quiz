import React from 'react'
import { AppNavigation } from './src/navigation/AppNavigation'
import { Provider } from 'react-redux'
import store from './src/store/index'
import { QuizState } from './src/context/quiz/QuizState'

const App = () => (
    <Provider store={store}>
        <QuizState>
            <AppNavigation/>
        </QuizState>
    </Provider>
)

export default App
