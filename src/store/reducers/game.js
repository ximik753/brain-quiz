import { ADD_CHAT_MESSAGE, GAME_INIT, GAME_ONLINE } from '../types'

const initialState = {
    status: 2,
    startTime: 300,
    online: 0,
    chat: []
}

const handlers = {
    [GAME_INIT]: (state, { payload }) => ({ ...state, ...payload }),
    [GAME_ONLINE]: (state, { online }) => ({ ...state, online }),
    [ADD_CHAT_MESSAGE]: (state, { message }) => ({ ...state, chat: [ ...state.chat, message ] }),
    DEFAULT: state => state
}

export const gameReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
