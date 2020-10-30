import React, { useContext, useRef, useState } from 'react'
import { StyleSheet, FlatList, View, TextInput, TouchableWithoutFeedback } from 'react-native'
import { useSelector } from 'react-redux'
import { id } from '../../utils/idGenerator'
import QuizChatItem from './QuizChatItem'
import { colors } from '../../utils/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { QuizContext } from '../../context/quiz/quizContext'
import { build } from '../../utils/quiz/packetUtils'
import { packets } from '../../utils/quiz/packets'
import { actions } from '../../utils/quiz/actions'

const QuizChat = () => {
    const flatList = useRef(null)
    const chat = useSelector(state => state.game.chat)
    const [message, setMessage] = useState('')
    const { ws } = useContext(QuizContext)

    const sendMessageHandler = () => {
        ws.send(build(packets.client.ClientCommands, { id: actions.chatMessage, data: { message } }))
        setMessage('')
    }

    const renderItem = ({ item }) => (
        <QuizChatItem
            name={item.name}
            avatar={item.avatar}
            message={item.message}
        />
    )

    return (
        <View>
            <FlatList
                data={chat}
                renderItem={renderItem}
                keyExtractor={() => id()}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                onContentSizeChange={() => flatList.current.scrollToEnd()}
                style={styles.container}
                ref={flatList}
            />
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Текст сообщения..."
                    placeholderTextColor={colors.font.default}
                    maxLength={50}
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableWithoutFeedback
                    onPress={sendMessageHandler}
                >
                    <MaterialIcons
                        name="send"
                        color={colors.background.messageSendBtn}
                        size={25}
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 190
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '95%'
    },
    input: {
        width: 240,
        borderWidth: 2,
        borderColor: colors.border.yellow,
        borderRadius: 48,
        height: 38,
        paddingHorizontal: 15,
        color: colors.font.default
    }
})

export default QuizChat
