import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, TextInput } from 'react-native'
import QuizChatItem from './QuizChatItem'
import { colors } from '../../utils/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const QuizChat = () => {
    return (
        <View>
            <QuizChatItem/>
            <QuizChatItem/>
            <QuizChatItem/>
            <QuizChatItem/>
            <QuizChatItem/>
            <View style={styles.messageWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Текст сообщения..."
                    placeholderTextColor={colors.font.default}
                    maxLength={50}
                />
                <TouchableWithoutFeedback>
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
    messageWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    input: {
        width: 255,
        borderWidth: 2,
        borderColor: colors.border.yellow,
        borderRadius: 48,
        height: 38,
        paddingHorizontal: 15,
        color: colors.font.default
    }
})

export default QuizChat
