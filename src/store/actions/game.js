import { ADD_CHAT_MESSAGE, GAME_INIT, GAME_ONLINE } from '../types'

export function gameInit (payload) {
    return { type: GAME_INIT, payload }
}

export function setGameOnline ({ online }) {
    return { type: GAME_ONLINE, online }
}

export function addChatMessage (message) {
    return { type: ADD_CHAT_MESSAGE, message }
}
