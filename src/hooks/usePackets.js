import { useDispatch } from 'react-redux'
import { packets } from '../utils/quiz/packets'
import { addChatMessage, gameInit, setGameOnline } from '../store/actions/game'

export const usePackets = () => {
    const dispatch = useDispatch()

    const dispatchPacket = (id, payload) => {
        switch (id) {
            case packets.server.HomeData:
                dispatch(gameInit(payload))
                break
            case packets.server.Online:
                dispatch(setGameOnline(payload))
                break
            case packets.server.ChatMessage:
                dispatch(addChatMessage(payload))
                break
        }
    }

    return { dispatchPacket }
}
