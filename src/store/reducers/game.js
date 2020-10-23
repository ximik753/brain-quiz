import { ADD_CHAT_MESSAGE, GAME_INIT, GAME_ONLINE, SELECTED_ANSWER, SET_ANSWER, SET_NEW_QUESTION } from '../types'

const initialState = {
    status: 2,
    startTime: 300,
    online: 0,
    chat: [],
    question: null,
    answer: {},
    selectedAnswer: 0,
    totalQuestion: 0
}

const handlers = {
    [GAME_INIT]: (state, { payload }) => ({ ...state, ...payload }),
    [GAME_ONLINE]: (state, { online }) => ({ ...state, online }),
    [ADD_CHAT_MESSAGE]: (state, { message }) => ({ ...state, chat: [...state.chat, message] }),
    [SET_NEW_QUESTION]: (state, { question }) => ({ ...state, question }),
    [SET_ANSWER]: (state, { answer }) => ({ ...state, answer }),
    [SELECTED_ANSWER]: (state, { id }) => ({ ...state, selectedAnswer: id }),
    DEFAULT: state => state
}

export const gameReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
