import { SET_TOKEN, UPDATE_AVATAR, UPDATE_BOOSTERS, USER_INIT } from '../types'

const initialState = {
    name: '',
    avatar: 0,
    boosters: [],
    coins: 0,
    stats: {},
    token: null,
    nextGameDate: 0
}

const handlers = {
    [USER_INIT]: (state, { payload }) => ({ ...state, ...payload }),
    [SET_TOKEN]: (state, { token }) => ({ ...state, token }),
    [UPDATE_BOOSTERS]: (state, { payload }) => ({ ...state, boosters: payload.boosters, coins: payload.coins }),
    [UPDATE_AVATAR]: (state, { id }) => ({ ...state, avatar: id }),
    DEFAULT: state => state
}

export const userReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
