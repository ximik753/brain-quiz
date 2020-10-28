import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Modal from 'react-native-modal'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import AppButton from '../UI/AppButton'

const QuizNotification = ({ show, closeHandler, children, pressHandler }) => {
    return (
        <Modal
            isVisible={show}
            onBackButtonPress={closeHandler}
            onBackdropPress={closeHandler}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Уведомление</Text>
                <Text style={styles.message}>{children}</Text>
                <View style={styles.wrapperButton}>
                    <AppButton
                        text="Закрыть"
                        styleButton={styles.button}
                        styleText={styles.buttonText}
                        pressHandler={closeHandler}
                    />
                    <AppButton
                        text="Применить"
                        styleButton={styles.button}
                        styleText={styles.buttonText}
                        pressHandler={pressHandler}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        padding: 15,
        alignItems: 'center',
        backgroundColor: colors.font.default
    },
    title: {
        fontFamily: fonts.bold,
        fontSize: 16
    },
    message: {
        fontFamily: fonts.semiBold,
        fontSize: 14,
        marginTop: 15
    },
    wrapperButton: {
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        width: 150
    },
    buttonText: {
        fontSize: 16
    }
})

export default QuizNotification
