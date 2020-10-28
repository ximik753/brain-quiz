import {
    ADD_CHAT_MESSAGE,
    GAME_INIT,
    GAME_ONLINE,
    SELECTED_ANSWER,
    SET_ANSWER,
    SET_IQ_ANSWERS,
    SET_NEW_QUESTION,
    UPDATE_STATUS
} from '../types'

const initialState = {
    status: 0,
    startTime: 0,
    online: 0,
    chat: [],
    question: null,
    answer: {},
    selectedAnswer: 0,
    totalQuestions: 0,
    iqAnswer: true
}

const handlers = {
    [GAME_INIT]: (state, { payload }) => ({ ...state, ...payload }),
    [GAME_ONLINE]: (state, { online }) => ({ ...state, online }),
    [ADD_CHAT_MESSAGE]: (state, { message }) => ({ ...state, chat: [...state.chat, message] }),
    [SET_NEW_QUESTION]: (state, { question }) => ({ ...state, question }),
    [SET_ANSWER]: (state, { answer }) => ({ ...state, answer }),
    [SELECTED_ANSWER]: (state, { id }) => ({ ...state, selectedAnswer: id }),
    [UPDATE_STATUS]: (state, { payload }) => ({ ...state, status: payload.id, ...payload.state }),
    [SET_IQ_ANSWERS]: (state, { payload }) => ({ ...state, iqAnswer: payload }),
    DEFAULT: state => state
}

export const gameReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
