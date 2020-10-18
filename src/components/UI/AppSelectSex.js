import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const AppSelectSex = ({ changeHandler }) => {
    const items = [
        { label: 'Мужской', value: 0 },
        { label: 'Женский', value: 1 }
    ]

    return (
        <View>
            <Text style={styles.title}>Ваш пол:</Text>
            <RadioForm
                radio_props={items}
                initial={0}
                formHorizontal={true}
                animation={true}
                buttonColor={colors.border.yellow}
                labelColor={colors.font.default}
                selectedButtonColor={colors.border.yellow}
                selectedLabelColor={colors.font.default}
                buttonSize={14}
                style={styles.inputsWrapper}
                onPress={changeHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.medium,
        fontSize: 14,
        color: colors.font.default,
        marginBottom: 10
    },
    inputsWrapper: {
        width: '70%',
        justifyContent: 'space-between'
    }
})

export default AppSelectSex
