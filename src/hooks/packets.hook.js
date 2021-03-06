import { useDispatch } from 'react-redux'
import { packets } from '../utils/quiz/packets'
import {
    addChatMessage,
    gameInit,
    setAnswer,
    setGameOnline,
    setNewQuestion,
    setWinnersGame,
    updateStatus
} from '../store/actions/game'

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
            case packets.server.NewQuestion:
                dispatch(setNewQuestion(payload))
                break
            case packets.server.RightAnswer:
                dispatch(setAnswer(payload))
                break
            case packets.server.UpdateStatus:
                dispatch(updateStatus(payload))
                break
            case packets.server.GameWinners:
                dispatch(setWinnersGame(payload))
        }
    }

    return { dispatchPacket }
}
