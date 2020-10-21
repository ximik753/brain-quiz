import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducers/user'
import { gameReducer } from './reducers/game'

const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer
})

export default createStore(rootReducer)
