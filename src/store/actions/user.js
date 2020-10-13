import { SET_TOKEN, UPDATE_AVATAR, UPDATE_BOOSTERS, USER_INIT } from '../types'

export function setUserToken (token) {
    return { type: SET_TOKEN, token }
}

export function userInit (data) {
    return { type: USER_INIT, payload: data }
}

export function updateBoosters (boosters) {
    return { type: UPDATE_BOOSTERS, boosters }
}

export function updateAvatar (id) {
    return { type: UPDATE_AVATAR, id }
}
