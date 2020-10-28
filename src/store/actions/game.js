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

export function gameInit (payload) {
    return { type: GAME_INIT, payload }
}

export function setGameOnline ({ online }) {
    return { type: GAME_ONLINE, online }
}

export function setNewQuestion (question) {
    return { type: SET_NEW_QUESTION, question }
}

export function addChatMessage (message) {
    return { type: ADD_CHAT_MESSAGE, message }
}

export function setAnswer (answer) {
    return { type: SET_ANSWER, answer }
}

export function selectAnswer (id) {
    return { type: SELECTED_ANSWER, id }
}

export function updateStatus ({ id, state }) {
    return {
        type: UPDATE_STATUS,
        payload: { id, state }
    }
}

export function setIqAnswers (value) {
    return { type: SET_IQ_ANSWERS, payload: value }
}
