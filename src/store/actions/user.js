import { SET_TOKEN, USER_INIT } from '../types'

export function setUserToken (token) {
    return { type: SET_TOKEN, token }
}

export function userInit (data) {
    return { type: USER_INIT, payload: data }
}
